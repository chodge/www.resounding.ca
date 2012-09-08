define [
	'app',
	'plugins/backbone.marionette'
], (app, Marionette) ->
	'use strict'

	class WeekView extends Marionette.ItemView
		
		initialize: (options) ->
			$(options.container).html('').append($('<h1>This is a calendar</h1>'))

	WeekView: WeekView