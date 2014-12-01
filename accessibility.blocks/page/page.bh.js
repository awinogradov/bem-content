module.exports = function(bh) {

    bh.match('page__header', function(ctx) {
        ctx.tag('header');
    });

    bh.match('page__content', function(ctx) {
        ctx.tag('main');
        ctx.attr('role', 'main');
    });

    bh.match('page__footer', function(ctx) {
        ctx.tag('footer');
    });

};
