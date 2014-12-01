module.exports = function(bh) {

    bh.match('image_wrap', function(ctx, json) {
        var content = ctx.content();
        content.title = json.caption;

        return bh.apply({ // ?
            block : 'figure',
            caption : json.caption,
            content : content
        });
    });

};
