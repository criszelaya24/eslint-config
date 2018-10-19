'use strict';

describe('parserOptions', () => {
    const { parserOptions } = _path.require('/index.js');

    it('cantidad de opciones', () => {
        _expect(Object.keys(parserOptions).length).to.equal(1);
    });
    it('ecmaVersion: 2017 - se activan las variables globales para node', () => {
        _expect(parserOptions.ecmaVersion).to.be.equal(2017);
    });
});
