module.exports = function(bh) {

    bh.match('source', function(ctx) {
        ctx.tag('pre');
        ctx.js(true);

/**
 * hm
    def()(function() {
        var _ctx = this.ctx;
        applyCtx({
            block : 'figure',
            caption : _ctx.caption,
            content : _ctx
        });
    }),
 */

        ctx.content([
            {
                elem : 'code',
                cls : ctx.mod('lang'),
                content : ctx.content()
            }
        ]);
    });

    bh.match('source__code', function(ctx) {
        ctx.tag('code');
    });

};
