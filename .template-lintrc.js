'use strict';

module.exports = {
  extends: 'recommended',

  rules: {
    'attribute-indentation':      false,
    'block-indentation':          false,
    'deprecated-render-helper':   false,
    'img-alt-attributes':         false,
    'linebreak-style':            false,
    'link-rel-noopener':          false,
    'no-attrs-in-components':     false,
    'no-bare-strings':            [
      '&lpar;', // (
      '&rpar;', // )
      '&comma;', // ,
      '&period;', // .
      '&amp;', // &
      '&AMP;', // &
      '&plus;', // +
      '&minus;', // -
      '&equals;', // =
      '&ast;', // *
      '&midast;', // *
      '&sol;', // /
      '&num;', // #
      '&percnt;', // %
      '&excl;', // !
      '&quest;', // ?
      '&colon;', // :
      '&lsqb;', // [
      '&lbrack;', // [
      '&rsqb;', // ]
      '&rbrack;', // ]
      '&lcub;', // {
      '&lbrace;', // {
      '&rcub;', // }
      '&rbrace;', // }
      '&lt;', // <
      '&LT;', // <
      '&gt;', // >
      '&GT;', // >
      '&bull;', // •
      '&bullet;', // •
      '&mdash;', // —
      '&nbsp;', // non-breaking space
      '&Tab;',
      '&NewLine;',
      '&verbar;', // |
      '&vert;', // |
      '&VerticalLine;', // |
      '&ndash;', // -
      '(',
      ')',
      ',',
      '.',
      '&',
      '+',
      '-',
      '=',
      '*',
      '/',
      '#',
      '%',
      '!',
      '?',
      ':',
      '[',
      ']',
      '{',
      '}',
      '<',
      '>',
      '•',
      '—',
      ' ',
      '|',
      '~',
      '"',
    ],
    'no-debugger':                false,
    'no-duplicate-attributes':    true,
    'no-html-comments':           false,
    'no-inline-styles':           false,
    'no-input-block':             false,
    'no-input-tagname':           false,
    'no-invalid-interactive':     false,
    'no-log':                     false,
    'no-nested-interactive':      false,
    'no-outlet-outside-routes':   false,
    'no-partial':                 false,
    'no-quoteless-attributes':    false,
    'no-shadowed-elements':       false,
    'no-triple-curlies':          false,
    'no-unbound':                 false,
    'no-unnecessary-concat':      false,
    'no-unused-block-params':     false,
    'quotes':                     'double',
    'self-closing-void-elements': false,
    'simple-unless':              false,
    'style-concatenation':        false,
    'table-groups':               false,
  }
};
