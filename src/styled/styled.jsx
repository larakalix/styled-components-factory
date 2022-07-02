import { createElement } from 'react';

const parseStyles = (styles) =>
  styles
    .split(';')
    .filter((style) => style.split(':')[0] && style.split(':')[1])
    .map((style) => [
      style
        .split(':')[0]
        .trim()
        .replace(/-./g, (c) => c.substr(1).toUpperCase()),
      style.split(':')[1].trim(),
    ])
    .reduce(
      (styleObj, style) => ({
        ...styleObj,
        [style[0]]: style[1],
      }),
      {}
    );

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

export const styled = {
  div: (strings, ...values) => {
    return (props) => {
      const styles = defaultTemplateLiteralFunction(strings, ...values)
        .trim()
        .replace(/\n/gi, '');

      if (!styles) return null;

      return createElement('div', {
        ...props,
        style: parseStyles(styles),
      });
    };
  },
  ul: (strings, ...values) => {
    return (props) => {
      const styles = defaultTemplateLiteralFunction(strings, ...values)
        .trim()
        .replace(/\n/gi, '');

      if (!styles) return null;

      return createElement('ul', {
        ...props,
        style: parseStyles(styles),
      });
    };
  },
};
