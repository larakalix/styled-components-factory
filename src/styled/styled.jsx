import { createElement } from 'react';

const HEAD = document.head || document.getElementsByTagName('head')[0];
const STYLE = document.createElement('style');
HEAD.appendChild(STYLE);

const defaultTemplateLiteralFunction = (strings, ...values) => {
  return strings.reduce((acc, v, i) => {
    acc += v;
    if (!values[i]) {
      acc += '';
      return acc;
    }

    acc += typeof values[i] === 'function' ? values[i](props) : values[i];
    return acc;
  }, '');
};

const appendCss = (styles, type) => {
  const random = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5);
  const cssClassName = `${type}-${random}`;
  const css = `.${cssClassName}{${styles}}`;

  if (STYLE.styleSheet) STYLE.styleSheet.cssText = css;
  else STYLE.appendChild(document.createTextNode(css));

  return cssClassName;
};

const types = ['div', 'ul', 'li', 'a', 'section'];

export const styled = types.reduce(
  (o, key) =>
    Object.assign(o, {
      [key]: (strings, ...values) => {
        return (props) => {
          const styles = defaultTemplateLiteralFunction(strings, ...values)
            .trim()
            .replace(/\n/gi, '');

          if (!styles) return null;

          return createElement(key, {
            ...props,
            className: appendCss(styles, key),
          });
        };
      },
    }),
  {}
);
