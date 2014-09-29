__Block: Source. Highlight sources.__

Build your pack before use block: `cd libs/highlight && python3 tools/build.py :common`

Block usage:

``` js
{
    block : 'source',
    mods : { lang : 'js', theme : 'github' },
    content : 'function test() {\n return true;\n }\n'
}
```

I want another theme! Ok, man. Create new value for 'theme' mod in Stylus tech with theme what you want.
In Stylus file `@import` theme from libs/highlight/src/styles.
