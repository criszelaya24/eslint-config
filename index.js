'use strict';

module.exports = {
    extends: 'eslint:recommended',
    env: { node: true, mocha: true, es6: true },
    rules: {
        'array-bracket-spacing': [ 'error', 'always' ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'indent': [ 'error', 4 ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'object-curly-spacing': [ 'error', 'always' ],
        'quote-props': [ 'error', 'consistent' ],
        'quotes': [ 'error', 'single', { allowTemplateLiterals: true, avoidEscape: true } ],
    },
};
