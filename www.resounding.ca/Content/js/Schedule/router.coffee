define [
	'app',
	'plugins/backbone.marionette',
	'views/schedule_list'
], (app, Marionette, ScheduleList) ->
	'use strict'

	class Controller extends Marionette.AppRouter
		routes: '': 'index'

		index: ->
			$('#main').html('').append(new ScheduleList().render().el)