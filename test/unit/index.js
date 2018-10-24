'use strict';

describe('eslint-config-nunchee', () => {
    const eslintConfigNunchee = _path.require('/index.js');

    it('cantidad de atributos', () => {
        _expect(Object.keys(eslintConfigNunchee).length).to.equal(4);
    });

    it('extends: eslint:recommended - se extiende de las reglas recomendadas por el equipo de eslint', () => {
        _expect(eslintConfigNunchee.extends).to.equal('eslint:recommended');
    });

    require('./env.js');
    require('./parseOptions.js');
    require('./rules.js');
});
