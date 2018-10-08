'use strict';

describe('rules', () => {
    it('cantidad de reglas personalizadas', () => {
        const { rules } = require('../index.js');
        _expect(Object.keys(rules).length).to.equal(8);
    });
    it('array-bracket-spacing: always - es requerido espacio después de [ y antes de ]', () => {
        const arrayBracketSpacing = [ 'error', 'always' ];
        _expect(require('../index.js').rules['array-bracket-spacing']).to.deep.equal(arrayBracketSpacing);
    });
    it('comma-dangle: always-multiline - requerir coma al final de linea en elementos o propiedades que están en una linea diferente al cierre ] o }', () => {
        const commaDangle = [ 'error', 'always-multiline' ];
        _expect(require('../index.js').rules['comma-dangle']).to.deep.equal(commaDangle);
    });
    it('indent: 4 - es requerido que sean 4 espacios en la codificación', () => {
        const indent = [ 'error', 4 ];
        _expect(require('../index.js').rules['indent']).to.deep.equal(indent);
    });
    it('no-console: process.env.NODE_ENV === "production" ? "error" : "off" - permitir console.{action} en los entornos distintos de producción', () => {
        // para quitar el cache y poder sobrescribir la variable de entorno
        delete require.cache[require.resolve('../index.js')];
        process.env.NODE_ENV = 'test';
        _expect(require('../index.js').rules['no-console']).to.equal('off');
        delete require.cache[require.resolve('../index.js')];
        process.env.NODE_ENV = 'production';
        _expect(require('../index.js').rules['no-console']).to.equal('error');
    });
    it('no-debugger: process.env.NODE_ENV === "production" ? "error" : "off" - permitir utilizar debugger en los entornos distintos de producción', () => {
        // para quitar el cache y poder sobrescribir la variable de entorno
        delete require.cache[require.resolve('../index.js')];
        process.env.NODE_ENV = 'test';
        _expect(require('../index.js').rules['no-debugger']).to.equal('off');
        delete require.cache[require.resolve('../index.js')];
        process.env.NODE_ENV = 'production';
        _expect(require('../index.js').rules['no-debugger']).to.equal('error');
    });
    it('object-curly-spacing: always - es requerido espacio después de { y antes de }', () => {
        const objectCurlySpacing = [ 'error', 'always' ];
        _expect(require('../index.js').rules['object-curly-spacing']).to.deep.equal(objectCurlySpacing);
    });
    it('quote-props: consistent - validar que las propiedades de un mismo nivel tengan consistencia en llevar o no comillas', () => {
        const quoteProps = [ 'error', 'consistent' ];
        _expect(require('../index.js').rules['quote-props']).to.deep.equal(quoteProps);
    });
    it('quotes: single {allowTemplateLiterals: true, avoidEscape: true} - las comillas utilizadas sean simples, se permitan las `` para el uso de template literal y se acepten comillas dobles dentro de comillas simples', () => {
        const quotes = [ 'error', 'single', { allowTemplateLiterals: true, avoidEscape: true } ];
        _expect(require('../index.js').rules['quotes']).to.deep.equal(quotes);
    });
});
