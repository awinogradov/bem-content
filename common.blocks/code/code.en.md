__Highlight code sources__

Build your pack before use block: `cd libs/highlight && python3 tools/build.py -t %lang%`

Block usage:

``` js
{
    block : 'code',
    mods : { lang : 'js', theme : 'zenburn' },
    content : 'function() {}'
}
```

I want another theme! Ok, man. Create new value for 'theme' mod in Stylus tech with theme what you want.
In Stylus file `@import` theme from libs/highlight/src/styles.
