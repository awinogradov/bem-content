# Source

Блок `source` используется для подсветки исходного кода в тексте.
Сборка пакета для highlight.js: `cd libs/highlight && python3 tools/build.py :common`

## Использование блока:

``` js
{
    block : 'source',
    mods : { lang : 'js', theme : 'github' },
    content : 'function test() {\n return true;\n }\n'
}
```

Если хочется использовать другую тему надо создать модификатор 'theme' с новым значением, равным имени темы из highlight.js в технологии Stylus.
Внутри этого файла импортировать тему `@import '../../../../libs/highlight/src/styles/%name%.css'`.

## Modifiers of a block

### _lang

Язык программирования для подсветки.

### _theme

Тема из highlight.js
