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
                { block : 'heading', lvl : 1, content : 'Level 1' },
                { block : 'paragraph', mods : { lead : true }, content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
                { block : 'paragraph', content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
                { block : 'heading', lvl : 2, content : 'Level 2' },
                { block : 'paragraph', content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
                { block : 'heading', lvl : 3, content : 'Level 3' },
                { block : 'paragraph', content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
                { block : 'heading', lvl : 4, content : 'Level 4' },
                { block : 'paragraph', mark : 'nb', content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
                {
                    block : 'source',
                    mods : { lang : 'js', theme : 'github' },
                    content : [
                        'function test() {\n' +
                        '    return \'false\';\n' +
                        '}'
                    ]
                },

                { block : 'paragraph', mods : { marker : 'nb' }, content : 'paragraph with NB' },
                { block : 'list', items: [ 'unordered 1', 'unordered 2' ] },
                { block : 'list', mods : { type: 'ordered' }, items: [ 'ordered 1', 'ordered 2' ] },
                {
                    block : 'list',
                    items : [
                        'nested list 1',
                        [
                            'nested list 2',
                            {
                                block : 'list',
                                items : [ 'nested 1', 'nested 2' ]
                            }
                        ]
                    ]
                },
                {
                    block : 'blockquote',
                    content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                },
                {
                    block : 'blockquote',
                    source : 'Anton Winogradov',
                    content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                }
            ]
        },
        {
            elem : 'footer',
            tag : 'footer',
            content : [

            ]
        }
    ]
})
