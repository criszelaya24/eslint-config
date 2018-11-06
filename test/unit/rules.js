'use strict';

describe('rules', () => {
    const { rules } = _path.require('/index.js');

    it('cantidad de reglas definidas', () => {
        _expect(Object.keys(rules).length).to.equal(18);
    });
    it('array-bracket-spacing: always - es requerido espacio después de [ y antes de ]', () => {
        const arrayBracketSpacing = [ 'error', 'always' ];

        _expect(rules['array-bracket-spacing']).to.deep.equal(arrayBracketSpacing);
    });
    it('arrow-spacing: { before: true, after: true } - es requerido espacio antes y después de =>', () => {
        const arrowSpacing = [ 'error', { before: true, after: true } ];

        _expect(rules['arrow-spacing']).to.deep.equal(arrowSpacing);
    });
    it('comma-dangle: always-multiline - requerir coma al final de linea en elementos o propiedades que están en una linea diferente al cierre ] o }', () => {
        const commaDangle = [ 'error', 'always-multiline' ];

        _expect(rules['comma-dangle']).to.deep.equal(commaDangle);
    });
    it('comma-spacing: { before: false, after: true } - requerir que no exista espacio antes de , pero si después', () => {
        const commaSpacing = [ 'error', { before: false, after: true } ];

        _expect(rules['comma-spacing']).to.deep.equal(commaSpacing);
    });
    it('indent: 4 - es requerido que sean 4 espacios en la codificación', () => {
        const indent = [ 'error', 4 ];

        _expect(rules['indent']).to.deep.equal(indent);
    });
    it('keyword-spacing: { before: true, after: true } - es requerido espacio antes y después de las palabras reservadas', () => {
        const keywordSpacing = [ 'error', { before: true, after: true } ];

        _expect(rules['keyword-spacing']).to.deep.equal(keywordSpacing);
    });
    it(`no-console: process.env.NODE_ENV === 'production' ? 'error' : 'off' - no permitir console.{action} en el entorno de producción`, () => {
        // para quitar el cache y poder sobrescribir la variable de entorno
        delete require.cache[ _path.get('/index.js') ];
        process.env.NODE_ENV = 'production';
        const rulesEnv = _path.require('/index.js').rules;

        _expect(rulesEnv['no-console']).to.equal('error');
    });
    it(`no-console: process.env.NODE_ENV !== 'production' ? 'error' : 'off' - permitir console.{action} en los entornos distintos de producción`, () => {
        // para quitar el cache y poder sobrescribir la variable de entorno
        delete require.cache[ _path.get('/index.js') ];
        process.env.NODE_ENV = 'test';
        const rulesEnv = _path.require('/index.js').rules;

        _expect(rulesEnv['no-console']).to.equal('off');
    });
    it(`no-debugger: process.env.NODE_ENV === 'production' ? 'error' : 'off' - no permitir utilizar debugger en el entorno de producción`, () => {
        // para quitar el cache y poder sobrescribir la variable de entorno
        delete require.cache[ _path.get('/index.js') ];
        process.env.NODE_ENV = 'production';
        const rulesEnv = _path.require('/index.js').rules;

        _expect(rulesEnv['no-debugger']).to.equal('error');
    });
    it(`no-debugger: process.env.NODE_ENV !== 'production' ? 'error' : 'off' - permitir utilizar debugger en los entornos distintos de producción`, () => {
        // para quitar el cache y poder sobrescribir la variable de entorno
        delete require.cache[ _path.get('/index.js') ];
        process.env.NODE_ENV = 'test';
        const rulesEnv = _path.require('/index.js').rules;

        _expect(rulesEnv['no-debugger']).to.equal('off');
    });
    it(`no-multiple-empty-lines: { max: 1, maxEOF: 1, maxBOF: 1 } - permitir como máximo 1 linea limpia`, () => {
        const noMultipleEmptyLines = [ 'error', { max: 1, maxEOF: 1, maxBOF: 1 } ];

        _expect(rules['no-multiple-empty-lines']).to.deep.equal(noMultipleEmptyLines);
    });
    it('object-curly-spacing: always - es requerido espacio después de { y antes de }', () => {
        const objectCurlySpacing = [ 'error', 'always' ];

        _expect(rules['object-curly-spacing']).to.deep.equal(objectCurlySpacing);
    });
    it(`padded-blocks: { blocks: 'never', classes: 'always', switches: 'always' } - no permitir lineas en blanco entre {}, si para clases y switches`, () => {
        const paddedBlocks =[ 'error', { blocks: 'never', classes: 'always', switches: 'always' } ];

        _expect(rules['padded-blocks']).to.deep.equal(paddedBlocks);
    });

    describe('padding-line-between-statements', () => {
        const paddingLineBetweenStatements = rules['padding-line-between-statements'];

        it(`cantidad de reglas de padding-line-between-statements`, () => {
            _expect(paddingLineBetweenStatements.length).to.equal(8);
        });
        it(`{ blankLine: 'always', prev: '*', next: 'return' } - siempre antes de un return debe existir una linea en blanco`, () => {
            const opt = { blankLine: 'always', prev: '*', next: 'return' };

            _expect(paddingLineBetweenStatements).to.deep.include(opt);
        });
        it(`{ blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' } - siempre debe ir una linea en blanco después de const, let y var y antes de cualquier otra cosa `, () => {
            const opt = { blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' };

            _expect(paddingLineBetweenStatements).to.deep.include(opt);
        });
        it(`{ blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ] } - no debe haber una linea en blanco entre const, let y var`, () => {
            const opt = { blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ] };

            _expect(paddingLineBetweenStatements).to.deep.include(opt);
        });
        it(`{ blankLine: 'always', prev: 'directive', next: '*' } - después de una directiva como 'use strict' debe haber una linea en blanco`, () => {
            const opt = { blankLine: 'always', prev: 'directive', next: '*' };

            _expect(paddingLineBetweenStatements).to.deep.include(opt);
        });
        it(`{ blankLine: 'any', prev: 'directive', next: 'directive' } - no debe haber lineas en blanco entre directivas`, () => {
            const opt = { blankLine: 'any', prev: 'directive', next: 'directive' };

            _expect(paddingLineBetweenStatements).to.deep.include(opt);
        });
        it(`{ blankLine: 'always', prev: '*', next: 'if' } - siempre antes de un if debe existir una linea en blanco`, () => {
            const opt = { blankLine: 'always', prev: '*', next: 'if' };

            _expect(paddingLineBetweenStatements).to.deep.include(opt);
        });
        it(`{ blankLine: 'always', prev: 'if', next: '*' } - siempre después de un if debe existir una linea en blanco`, () => {
            const opt = { blankLine: 'always', prev: 'if', next: '*' };

            _expect(paddingLineBetweenStatements).to.deep.include(opt);
        });
    });
    it('quote-props: consistent - validar que las propiedades de un mismo nivel tengan consistencia en llevar o no comillas', () => {
        const quoteProps = [ 'error', 'consistent' ];

        _expect(rules['quote-props']).to.deep.equal(quoteProps);
    });
    it('quotes: single {allowTemplateLiterals: true, avoidEscape: true} - las comillas utilizadas sean simples, se permitan las `` para el uso de template literal y se acepten comillas dobles dentro de comillas simples', () => {
        const quotes = [ 'error', 'single', { allowTemplateLiterals: true, avoidEscape: true } ];

        _expect(rules['quotes']).to.deep.equal(quotes);
    });
    it('semi: always - siempre sea requerido el ;', () => {
        const semi = [ 'error', 'always' ];

        _expect(rules['semi']).to.deep.equal(semi);
    });
    it('space-before-blocks: always - es requerido espacio antes de {', () => {
        const spaceBeforeBlocks = [ 'error', 'always' ];

        _expect(rules['space-before-blocks']).to.deep.equal(spaceBeforeBlocks);
    });
    it(`space-in-parens: never - nunca tener un espacio antes de ) y después de )`, () => {
        const spaceInParens = [ 'error', 'never' ];

        _expect(rules['space-in-parens']).to.deep.equal(spaceInParens);
    });
    it(`brace-style: 1tbs -  mantener estilo de escritura de llaves en if-else, try-catch y function`, () => {
        const braceStyle = [ 'error', '1tbs', { allowSingleLine: true } ];

        _expect(rules['brace-style']).to.deep.equal(braceStyle);
    });
});
