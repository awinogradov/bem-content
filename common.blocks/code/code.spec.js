modules.define(
    'spec',
    ['code', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon'],
    function(provide, Code, BEMDOM, $, BEMHTML, sinon) {

describe('code', function() {
    var code;

    beforeEach(function() {
        code = BEMDOM.init($(BEMHTML.apply({ block : 'code' })).appendTo('body'))
            .bem('code');
    });

    afterEach(function() {
        BEMDOM.destruct(code.domElem);
    });


    describe('highlight', function() {
        it('should load highlight.js', function() {
            
        });

    });

});

provide();

});
