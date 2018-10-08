'use strict';

describe('eslint-config-nunchee', () => {
    it('cantidad de atributos', () => {
        _expect(Object.keys(require('../index.js')).length).to.equal(3);
    });
    it('extends: eslint:recommended - se extiende de las reglas recomendadas por el equipo de eslint', () => {
        const extend = require('../index.js').extends;
        _expect(extend).to.equal('eslint:recommended');
    });
    require('./env.js');
    require('./rules.js');
});
