__Блок: Source. Подсветка кода.__

Сборка пакета для highlight.js: `cd libs/highlight && python3 tools/build.py :common`

Использование:

``` js
{
    block : 'source',
    mods : { lang : 'js', theme : 'github' },
    content : 'function test() {\n return true;\n }\n'
}
```

Если хочется использовать другую тему надо создать модификатор 'theme' с новым значением, равным имени темы из highlight.js в технологии Stylus.
Внутри этого файла импортировать тему `@import '../../../../libs/highlight/src/styles/%name%.css'`.
