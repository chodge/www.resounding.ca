require [
	'app',
	'router',
	'datejs'
], (app, Router) ->

	app.router = new Router();

	app.addInitializer ->
		
		Backbone.history.start()

		$(document).on('click', 'a:not([data-bypass])', (evt) ->
			href = $(this).attr('href')

			if href and href.indexOf('#') == 0
				evt.preventDefault()

				Backbone.history.navigate(href, true);
		)

	app.start()