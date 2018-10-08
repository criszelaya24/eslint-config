# Changelog

Todos los cambios importantes son escritos aquí. El Formato esta basado en [Keep a Changelog](http://keepachangelog.com/es-ES/1.0.0/)

## [Unreleased]

## [3.0.0] - 2018-10-08
### Added
- se decide extender de lo recomendado por el equipo de eslint https://eslint.org/docs/rules
- se agregan reglas para uso de comillas simples
- se agrega regla para requerir la coma al final de los arreglos u objetos
- se agrega archivo .editorconfig basado en https://editorconfig.org, para tener las mismas opciones de codificación
- se agrega archivo _bitbucket-pipelines.yml_ para agregar validación de código al momento de subir un cambio
- se agrega test unitarios para validar los atributos de la configuración para eslint
- se agrega a _bitbucket-pipelines.yml_ el script que valida las pruebas unitarias y el informe de cobertura de código
- se agrega carpeta _.vscode_ con el archivo _launch.json_ en el cual se detalla la configuración para hacer debug en los test con mocha