// Closure compile tools require a namespace.
// Generate a empty custom namespace to together all the needed libs.

goog.provide('customClosureLib');

goog.require('goog.html.SafeUrl');
goog.require('goog.html.TrustedResourceUrl');
goog.require('goog.dom');

customClosureLib = () => {
};

// Ensures the symbol will be visible after compiler renaming.
goog.exportSymbol('customClosureLib', customClosureLib);


