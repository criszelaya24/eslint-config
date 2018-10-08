Este proyecto tiene como objetivo de poder tener un formato de codificación unificado

# [eslint:recommended][eslint-recommended]

Para no tener que definir todas las reglas, se sigue un estándar predefinido como lo recomienda el equipo de eslint (mas info [aquí][eslint-recommended])

Reglas personalizadas:

* [array-bracket-spacing][array-bracket-spacing]: _always_
* [comma-dangle][comma-dangle]: _always-multiline_
* [indent][indent]: _4_
* [no-console][no-console]: activo cuando _**process.env.NODE_ENV === 'production'**_
* [no-debugger][no-debugger]: activo cuando _**process.env.NODE_ENV === 'production'**_
* [object-curly-spacing][object-curly-spacing]: _always_
* [quote-props][quote-props]: _consistent_
* [quotes][quotes]: _single_ con las opciones de _allowTemplateLiterals_ y _avoidEscape_ activas

[Environments][Environments]:

* node: permitir variables globales y scope de node
* mocha: todas las variables globales que tiene mocha para codificar las pruebas
* es6: se activas todas las características de la version [ECMAScript 6][ecmascript6]

[array-bracket-spacing]: https://eslint.org/docs/rules/array-bracket-spacing
[comma-dangle]: https://eslint.org/docs/rules/comma-dangle#always-multiline
[ecmascript6]: http://es6-features.org
[Environments]: https://eslint.org/docs/user-guide/configuring#specifying-environments
[eslint-recommended]: https://eslint.org/docs/rules
[indent]: https://eslint.org/docs/rules/indent
[no-console]: https://eslint.org/docs/rules/no-console
[no-debugger]: https://eslint.org/docs/rules/no-debugger
[object-curly-spacing]: https://eslint.org/docs/rules/object-curly-spacing
[quote-props]: https://eslint.org/docs/rules/quote-props#consistent
[quotes]: https://eslint.org/docs/rules/quotes#single

> NOTA: se puede agregar un archivo _.eslintrc.{js,json}_ en cualquier carpeta y sobrescribir las configuraciones. Como en el caso de _test/.eslintrc.json_ donde se agrega la variable global para que no de conflicto de que la variable no esta definida
