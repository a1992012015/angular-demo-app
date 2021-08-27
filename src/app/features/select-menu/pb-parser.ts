import parsimmon from 'parsimmon';

const {
  regex,
  string,
  optWhitespace,
  lazy,
  alt,
  seq,
  formatError
} = parsimmon;

const comment = regex(/#.+/).then(optWhitespace.atMost(1));
const whitespace = optWhitespace.then(comment.atMost(1));

const lexeme = (p: parsimmon.Parser<string>) => p.skip(whitespace);

const colon = lexeme(string(':'));

const lbrace = lexeme(string('{'));
const rbrace = lexeme(string('}'));

const stripFirstLast = (x: string) => x.substr(1, x.length - 2);

const identifier = lexeme(regex(/[a-zA-Z_][0-9a-zA-Z_+-]*/));
const doubleString = lexeme(regex(/".*"/).map(stripFirstLast));
const singleString = lexeme(regex(/'.*'/).map(stripFirstLast));

const number = lexeme(regex(/[.]?[0-9+-][0-9a-zA-Z_.+-]*/)).map(Number);
const trueLiteral = lexeme(string('true')).result(true);
const falseLiteral = lexeme(string('false')).result(false);

// tslint: disable
// @ts-ignore
const expr = lazy('an expression', () => alt(pair, message).many());

// @ts-ignore
const message = seq(identifier, colon.times(0, 1).then(lbrace).then(expr).skip(rbrace))
  // tslint:disable-next-line:no-shadowed-variable
  .map(message => ({
    type: 'message',
    name: message[0],
    values: message[1]
  }));

const value = alt(trueLiteral, falseLiteral, number, doubleString, singleString, identifier);

const pair = seq(identifier.skip(colon), value)
  // tslint:disable-next-line:no-shadowed-variable
  .map(pair => ({
    type: 'pair',
    name: pair[0],
    value: pair[1]
  }));

/**
 * 1
 */
// @ts-ignore
function parseRaw(input) {
  const result = whitespace.then(expr).parse(input);
  if (!result.status) {
    // @ts-ignore
    result.error = formatError(input, result);
  }
  return result;
}

/**
 * 1
 */
// @ts-ignore
function parse(input, schema = {}) {
  const raw = parseRaw(input);
  // @ts-ignore
  if (raw.error) {
    // @ts-ignore
    return { error: raw.error };
  } else {
    // @ts-ignore
    return toObject(raw.value, schema);
  }

}

/**
 * 1
 */
// @ts-ignore
function toObject(input, schema = {}) {
  // @ts-ignore
  const result = input.reduce((acc, item) => {
    // tslint:disable-next-line:no-shadowed-variable
    const value = item.values ? toObject(item.values) : item.value;
    // @ts-ignore
    const isArray = schema[item.name] && schema[item.name] instanceof Array;

    if (!acc[item.name]) {
      acc[item.name] = isArray ? [value] : value;
    } else if (acc[item.name] instanceof Array) {
      acc[item.name].push(value);
    } else {
      acc[item.name] = [acc[item.name], value];
    }
    return acc;
  }, {});
  return result;
}

export { parse };
