'use strict';

describe('env', () => {
    const { env } = _path.require('/index.js');

    it('cantidad de entornos activos', () => {
        _expect(Object.keys(env).length).to.equal(2);
    });
    it('node: true - se activan las variables globales para node', () => {
        _expect(env.node).to.be.true;
    });
    it('mocha: true - se activan las variables globales para mocha', () => {
        _expect(env.mocha).to.be.true;
    });
});
