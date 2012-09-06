(function() {

  require(['app', 'router', 'datejs'], function(app, Router) {
    app.router = new Router();
    app.addInitializer(function() {
      Backbone.history.start();
      return $(document).on('click', 'a:not([data-bypass])', function(evt) {
        var href;
        href = $(this).attr('href');
        if (href && href.indexOf('#') === 0) {
          evt.preventDefault();
          return Backbone.history.navigate(href, true);
        }
      });
    });
    return app.start();
  });

}).call(this);
