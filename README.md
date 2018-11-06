Este proyecto tiene como objetivo de poder tener un formato de codificación unificado

# [eslint:recommended][eslint-recommended]

Para no tener que definir todas las reglas, se sigue un estándar predefinido como lo recomienda el equipo de eslint (mas info [aquí][eslint-recommended])

[eslint-recommended]: https://eslint.org/docs/rules

[Environments][Environments]:

* node: permitir variables globales y scope de node
* mocha: todas las variables globales que tiene mocha para codificar las pruebas
* es6: necesario para reconocer variables globales como Promise, mas info [aquí][eslint-issues-9812]

[eslint-issues-9812]: https://github.com/eslint/eslint/issues/9812

[Environments]: https://eslint.org/docs/user-guide/configuring#specifying-environments

[parserOptions][parserOptions]:

* ecmaVersion: _2017_, para permitir el uso de async/await

[parserOptions]: https://eslint.org/docs/user-guide/configuring#specifying-parser-options

Reglas personalizadas:

* [array-bracket-spacing][array-bracket-spacing]: _always_
* [arrow-spacing'][arrow-spacing']: _```{ before: true, after: true }```_
* [brace-style][brace-style]: _1tbs_, _```{ allowSingleLine: true }```_
* [comma-dangle][comma-dangle]: _always-multiline_
* [comma-spacing][comma-spacing]: _```{ before: false, after: true }```_
* [indent][indent]: _4_
* [keyword-spacing][keyword-spacing]: _```{ before: true, after: true }```_
* [no-console][no-console]: activo cuando _**process.env.NODE_ENV === 'production'**_
* [no-debugger][no-debugger]: activo cuando _**process.env.NODE_ENV === 'production'**_
* [no-multiple-empty-lines][no-multiple-empty-lines]: _```{ max: 1, maxEOF: 1, maxBOF: 1 }```_
* [object-curly-spacing][object-curly-spacing]: _always_
* [padded-blocks][padded-blocks]: _```{ blocks: 'never', classes: 'always', switches: 'always' }```_
* [padding-line-between-statements][padding-line-between-statements]:
    * _```{ blankLine: 'always', prev: '*', next: 'return' }```_
    * _```{ blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' }```_
    * _```{ blankLine: 'any', prev: [ 'const', 'let', 'var' ], next: [ 'const', 'let', 'var' ] }```_
    * _```{ blankLine: 'always', prev: 'directive', next: '*' }```_
    * _```{ blankLine: 'any', prev: 'directive', next: 'directive' }```_
    * _```{ blankLine: 'always', prev: '*', next: 'if' }```_
    * _```{ blankLine: 'always', prev: 'if', next: '*' }```_
* [quote-props][quote-props]: _consistent_
* [quotes][quotes]: _single_, _```{ allowTemplateLiterals: true, avoidEscape: true }```_
* [semi][semi]: _always_
* [space-before-blocks][space-before-blocks]: _always_
* [space-in-parens][space-in-parens]: _never_

[array-bracket-spacing]: https://eslint.org/docs/rules/array-bracket-spacing
[arrow-spacing']: https://eslint.org/docs/rules/arrow-spacing
[brace-style]: https://eslint.org/docs/rules/brace-style#1tbs
[comma-dangle]: https://eslint.org/docs/rules/comma-dangle#always-multiline
[comma-spacing]: https://eslint.org/docs/rules/comma-spacing
[indent]: https://eslint.org/docs/rules/indent
[keyword-spacing]: https://eslint.org/docs/rules/keyword-spacing
[no-console]: https://eslint.org/docs/rules/no-console
[no-debugger]: https://eslint.org/docs/rules/no-debugger
[no-multiple-empty-lines]: https://eslint.org/docs/rules/no-multiple-empty-lines
[object-curly-spacing]: https://eslint.org/docs/rules/object-curly-spacing
[padded-blocks]: https://eslint.org/docs/rules/padded-blocks
[padding-line-between-statements]: https://eslint.org/docs/rules/padding-line-between-statements
[quote-props]: https://eslint.org/docs/rules/quote-props#consistent
[quotes]: https://eslint.org/docs/rules/quotes#single
[semi]: https://eslint.org/docs/rules/semi
[space-before-blocks]: https://eslint.org/docs/rules/space-before-blocks
[space-in-parens]: https://eslint.org/docs/rules/space-in-parens

> NOTA: se puede agregar un archivo _.eslintrc.{js,json}_ en cualquier carpeta y sobrescribir las configuraciones. Como en el caso de _test/.eslintrc.json_ donde se agrega la variable global para que no de conflicto de que la variable no esta definida
