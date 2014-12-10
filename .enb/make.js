var path = require('path');

YENV = 'development';

// Technologies
var techs = {
    levels          : require('enb/techs/levels'),
    levelsToBemdecl : require('enb-bem-techs/techs/levels-to-bemdecl'),
    files           : require('enb/techs/files'),
    provider        : require('enb/techs/file-provider'),
    copy            : require('enb/techs/file-copy'),
    merge           : require('enb/techs/file-merge'),
    bemdecl         : require('enb/techs/bemdecl-from-bemjson'),
    deps            : require('enb/techs/deps'),
    modules         : require('enb-modules/techs/prepend-modules'),
    js              : require('enb-diverse-js/techs/browser-js'),
    stylus          : require('enb-stylus/techs/css-stylus'),
    autoprefixer    : require('enb-autoprefixer/techs/css-autoprefixer'),
    bemhtml         : require('enb-bemxjst/techs/bemhtml'),
    bemtree         : require('enb-bemxjst/techs/bemtree'),
    html            : require('enb-bemxjst/techs/html-from-bemjson'),
    bh              : require('enb-bh/techs/bh-server'),
    bhServerInclude : require('enb-bh/techs/bh-server-include'),
    bhYm            : require('enb-bh/techs/bh-client-module'),
    bhHtml          : require('enb-bh/techs/html-from-bemjson'),
    borschik        : require('enb-borschik/techs/borschik'),
    nodejs          : require('enb-diverse-js/techs/node-js'),
    'enb-modules'   : require('enb-modules/techs/prepend-modules')
};

/**
* Library levels
*
* @param {Object} config
* @returns {*|Array}
*/
function libLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-components/common.blocks', check : false },
        { path : 'libs/bem-components/desktop.blocks', check : false },
        { path : 'libs/bem-social/common.blocks', check : false },
        { path : 'libs/bem-social/design/common.blocks', check : false }
    ]
    .concat([
        'common.blocks',
        'design/common.blocks',
        'accessibility.blocks',
        'promo.blocks',
        'design/promo.blocks'
    ])
    .map(function(level) {
        return config.resolvePath(level);
    });
}

/**
* Builder
*
* @param {Object} config
*/
module.exports = function(config) {
    config.includeConfig('enb-bem-examples');
    config.includeConfig('enb-bem-tmpl-specs');

    var examples = config.module('enb-bem-examples').createConfigurator('tests');
    var tmplsSpecs = config.module('enb-bem-tmpl-specs').createConfigurator('tmpl-specs');

    examples.configure({
        destPath : 'common.tests',
        techSuffixes : ['tests'],
        levels : ['common.blocks']
    });

    tmplsSpecs.configure({
        referenceDirSuffixes : ['tmpl-specs'],
        destPath : 'common.tmpl-specs',
        levels : ['common.blocks'],
        sourceLevels : [
            { path : 'libs/bem-core/common.blocks', check : false },
            { path : 'libs/bem-components/common.blocks', check : false },
            { path : 'libs/bem-components/desktop.blocks', check : false }
        ]
        .concat([
            'common.blocks',
            'accessibility.blocks'
        ])
        .map(function(level) {
            return config.resolvePath(level);
        }),
        engines : {
            bh : {
                tech : 'enb-bh/techs/bh-server'
            },
            'bemhtml-dev' : {
                tech : 'enb-bemxjst/techs/bemhtml',
                options : { devMode : true }
            },
            'bemhtml-prod' : {
                tech : 'enb-bemxjst/techs/bemhtml',
                options : { devMode : false }
            }
        }
    });

    // Common technologies
    config.nodes(['*.pages/*', '*.tests/*/*'], function(nodeConfig) {
        nodeConfig.addTechs([
            use('deps', { target : '?.bemdecl.js' }),
            use('levels', { levels : libLevels(config) }),
            use('bemdecl'),
            use('js', { target : '?.pre.js' }),
            use('modules', { target : '?.js', source : '?.pre.js' }),
            use('stylus', { sourceSuffixes : ['css', 'ie.css', 'styl', 'ie.styl'], target : '?.ie.css' }),
            use('stylus', { target : '?.noprefix.css' }),
            use('autoprefixer', {
                browserSupport : [
                    'last 2 versions',
                    'ie 10',
                    'ff 24',
                    'opera 12.16',
                    'android 4',
                    'ios 6'
                ],
                sourceTarget : '?.noprefix.css'
            }),
            use('bh'),
            use('bhHtml')
        ]);

        nodeConfig.addTargets([
            '_?.js', '_?.css', '_?.ie.css', '?.html'
        ]);
    });

    // Bundles technologies for all bundles
    config.nodes(['*.pages/*'], function(nodeConfig) {
        nodeConfig.addTechs([
            use('files'),
            use('provider', { target : '?.bemjson.js' })
        ]);
    });

    // Tests technologies for all bundles
    config.nodes(['*.tests/*/*'], function(nodeConfig) {
        nodeConfig.addTechs([
            use('files'),
            use('copy', { sourceTarget : '?.css', destTarget : '_?.css' }),
            use('copy', { sourceTarget : '?.ie.css', destTarget : '_?.ie.css' }),
            use('borschik', { sourceTarget : '?.js', destTarget : '?.borschik.js', minify : false, freeze : true }),
            use('copy', { sourceTarget : '?.borschik.js', destTarget : '_?.js' })
        ]);
    });

    // Development
    config.mode('development', function() {
        config.nodes(['*.pages/*'], function(nodeConfig) {
            nodeConfig.addTechs([
                use('copy', { sourceTarget : '?.css', destTarget : '_?.css' }),
                use('copy', { sourceTarget : '?.ie.css', destTarget : '_?.ie.css' }),
                use('borschik', { sourceTarget : '?.js', destTarget : '?.borschik.js', minify : false, freeze : true }),
                use('copy', { sourceTarget : '?.borschik.js', destTarget : '_?.js' })
            ]);
        });
    });

    // Production
    config.mode('production', function() {
        config.nodes(['*.pages/*'], function(nodeConfig) {
            nodeConfig.addTechs([
                use('borschik', { sourceTarget : '?.css', destTarget : '_?.css', minify : true, freeze : true }),
                use('borschik', { sourceTarget : '?.ie.css', destTarget : '_?.ie.css', minify : true, freeze : true }),
                use('borschik', { sourceTarget : '?.js', destTarget : '_?.js', minify : true, freeze : true })
            ]);
        });
    });

};

/**
* Resolve tech for `nodeConfig`
*
* @param {String} tech - tech name
* @param {Object} params - tech params
* @returns {*[]}
*/
function use(tech, params) {
    return [
        techs[tech],
        params || {}
    ];
}
