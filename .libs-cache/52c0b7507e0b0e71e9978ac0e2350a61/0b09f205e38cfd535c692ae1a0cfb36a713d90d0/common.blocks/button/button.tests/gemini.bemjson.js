({
    block : 'page',
    title : 'bem-components: button',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [
        { tag : 'h2', content : 'default' },
        { tag : 'p', content : [
            {
                block : 'button',
                text : 'default',
                cls : 'gemini-test-button-default-enabled'
            },
            '&nbsp;&nbsp;&nbsp;',
            {
                block : 'button',
                text : 'disabled',
                mods : { disabled : true },
                cls : 'gemini-test-button-default-disabled'
            },
            '&nbsp;&nbsp;&nbsp;',
            {
                block : 'button',
                mods : { type : 'link' },
                url : '#',
                text : 'link',
                cls : 'gemini-test-button-default-link-enabled'
            },
            '&nbsp;&nbsp;&nbsp;',
            {
                block : 'button',
                mods : { type : 'link', disabled : true },
                url : '#',
                text : 'disabled link',
                cls : 'gemini-test-button-default-link-disabled'
            }
        ] },

        { tag : 'h2', content : 'normal' },

        { tag : 'h3', content : 'view' },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm' },
                text : 'normal',
                cls : 'gemini-test-button-normal-enabled'
            },
            '&nbsp;&nbsp;&nbsp;',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', disabled : true },
                text : 'normal',
                cls : 'gemini-test-button-normal-disabled'
            },
            '&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', pseudo : true },
                text : 'pseudo',
                cls : 'gemini-test-button-pseudo-enabled'
            },
            '&nbsp;&nbsp;&nbsp;',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', pseudo : true, disabled : true },
                text : 'pseudo',
                cls : 'gemini-test-button-pseudo-disabled'
            },
            '&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', action : true },
                text : 'action',
                cls : 'gemini-test-button-action-enabled'
            },
            '&nbsp;&nbsp;&nbsp;',
            {
                block : 'button',
                mods : { theme : 'normal', size : 'm', action : true, disabled : true },
                text : 'action',
                cls : 'gemini-test-button-action-disabled'
            }
        ] },

        /* TODO: tests are not implemented
        { tag : 'h3', content : 'size' },
        { tag : 'p', content : ['s', 'm', 'l', 'xl']
            .reduce(function(prev, size, i, arr) {
                prev.push({
                    block : 'button',
                    mods : { theme : 'normal', size : size },
                    text : 'size ' + size,
                    cls : 'gemini-test-button-size-' + size
                });

                if (i < arr.length - 1) prev.push('&nbsp;&nbsp;&nbsp;');

                return prev;
            }, [])
        },
        */

        { tag : 'h3', content : 'link' },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : {
                    theme : 'normal',
                    size : 'm',
                    type : 'link'
                },
                url : '#',
                text : 'default link',
                cls : 'gemini-test-button-normal-link-enabled'
            },
            '&nbsp;&nbsp;&nbsp;',
            {
                block : 'button',
                mods : {
                    theme : 'normal',
                    size : 'm',
                    type : 'link',
                    disabled : true
                },
                url : '#',
                text : 'disabled link',
                cls : 'gemini-test-button-normal-link-disabled'
            }
        ] },

        /* TODO: tests are not implemented
        { tag : 'h3', content : 'max-width' },
        { tag : 'p', content : {
            block : 'button',
            mods : {
                theme : 'normal',
                size : 'm'
            },
            textMaxWidth : 100,
            text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        } },
        */

        { tag : 'h3', content : 'icon' },
        { tag : 'p', content : [
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                // Здесь иконка прописана через content, чтобы появилась в deps.js
                content : { block : 'icon', mods : { action : 'download' } },
                cls : 'gemini-test-button-normal-icon-enabled'
            },
            '&nbsp;&nbsp;&nbsp;',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's', disabled : true },
                icon : { block : 'icon', mods : { action : 'download' } },
                cls : 'gemini-test-button-normal-icon-disabled'
            }
            /* TODO: tests are not implemented
            '&nbsp;&nbsp;&nbsp;',
            {
                block : 'button',
                text : 'download',
                mods : { theme : 'normal', size : 's' },
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            '&nbsp;&nbsp;&nbsp;',
            {
                block : 'button',
                text : 'download',
                mods : { theme : 'normal', size : 's', disabled : true },
                icon : { block : 'icon', mods : { action : 'download' } }
            },
            '&nbsp;&nbsp;&nbsp;',
            {
                block : 'button',
                mods : { theme : 'normal', size : 's' },
                content : [
                    { block : 'icon', mods : { action : 'left' } },
                    { elem : 'text', content : 'set width' },
                    { block : 'icon', mods : { action : 'right' } }
                ]
            }
            */
        ] },

        { tag : 'h3', content : 'togglable' },
        { tag : 'p', content : {
            block : 'button',
            mods : { theme : 'normal', size : 'm', togglable : 'check' },
            text : 'check',
            cls : 'gemini-test-button-normal-check'
        } }
    ]
});
