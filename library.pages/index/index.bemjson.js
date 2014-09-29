({
    block : 'page',
    title : 'Yeoman BEM',
    favicon : 'favicon.ico',
    head : [{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1.0' }}],
    styles : [{ elem : 'css', url : 'assets/application.min.css' }],
    scripts : [{ elem : 'js', url : 'assets/application.min.js' }],
    content : [
        {
            elem : 'header',
            tag : 'header',
            content : [
            ]
        },
        {
            elem : 'content',
            tag : 'main',
            content : [
                {
                    block : 'source',
                    mods : { lang : 'js', theme : 'github' },
                    content : [
                        'function test() {\n' +
                        '    return \'false\';\n' +
                        '}'
                    ]
                },
                { block : 'p', content : 'paragraph' },
                { block : 'p', mods : { marker : 'nb' }, content : 'paragraph' }
            ]
        },
        {
            elem : 'footer',
            tag : 'footer',
            content : [
                'License: MIT'
            ]
        }
    ]
})
