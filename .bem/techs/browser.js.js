var PATH = require('path'),
    BEM = require('bem'),
    Q = BEM.require('q');

exports.baseTechName = '../../libs/bem-core/.bem/techs/browser.js';

exports.techMixin = {

    getCreateResult : function(path, suffix, vars) {
        return BEM.template.process([
            'modules.define(',
            '   \'{{bemBlockName}}\',',
            '   [\'i-bem__dom\', \'jquery\', \'dom\'],',
            '   function(provide, BEMDOM, $, dom) {',
            '   ',
            'provide(BEMDOM.decl(this.name, {',
            '   ',
            '    onSetMod: {',
            '       \'js\' : {',
            '           \'inited\' : function () {',
            '               ',
            '           }',
            '        }',
            '    }',
            '    ',
            '}));',
            '    ',
            '});'
        ], vars);
    }

};
