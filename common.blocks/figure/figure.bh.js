module.exports = function(bh) {

    bh.match('figure', function(ctx, json) {
        ctx.tag('figure');
        ctx.content([
            {
                elem : 'content',
                content : ctx.content()
            },
            json.caption && {
                elem : 'caption',
                content : json.caption
            }
        ]);
    });

    bh.match('figure__caption', function(ctx) {
        ctx.tag('figcaption');
    });

};
