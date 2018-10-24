'use strict';

module.exports = {
    extends: 'eslint:recommended',
    env: { node: true, mocha: true, es6: true },
    parserOptions: {
        ecmaVersion: 2017,
    },
    rules: {
        'array-bracket-spacing': [ 'error', 'always' ],
        'arrow-spacing': [ 'error', { before: true, after: true } ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'comma-spacing': [ 'error', { before: false, after: true } ],
        'indent': [ 'error', 4 ],
        'keyword-spacing': [ 'error', { before: true, after: true } ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-multiple-empty-lines': [ 'error', { max: 1, maxEOF: 1, maxBOF: 1 } ],
        'object-curly-spacing': [ 'error', 'always' ],
        'padded-blocks': [ 'error', { blocks: 'never', classes: 'always', switches: 'always' } ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' },
            { blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ] },
            { blankLine: 'always', prev: 'directive', next: '*' },
            { blankLine: 'any', prev: 'directive', next: 'directive' },
        ],
        'quote-props': [ 'error', 'consistent' ],
        'quotes': [ 'error', 'single', { allowTemplateLiterals: true, avoidEscape: true } ],
        'semi': [ 'error', 'always' ],
        'space-before-blocks': [ 'error', 'always' ],
        'space-in-parens': [ 'error', 'never' ],
    },
};
