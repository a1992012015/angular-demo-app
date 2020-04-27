/**
 * load remote script by url
 */
export const loadScriptByUrl = (url: string) => {
  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement('script');
    scriptEle.src = url;
    scriptEle.onload = resolve;
    scriptEle.onerror = reject;
    document.body.appendChild(scriptEle);
  });
};
