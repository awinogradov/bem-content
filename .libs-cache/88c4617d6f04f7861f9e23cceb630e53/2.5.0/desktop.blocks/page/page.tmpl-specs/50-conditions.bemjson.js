({
    block : 'page',
    title : 'Пример подключения es5-shims для IE',
    head : [
        '<!--[if lt IE 9]>',
        { elem : 'js', url : '//yastatic.net/es5-shims/0.0.1/es5-shims.min.js' },
        '<![endif]-->'
    ]
})
