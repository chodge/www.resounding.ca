define [
	'app',
	'plugins/backbone.marionette',
	'views/schedule_list'
], (app, Marionette, ScheduleList) ->
	'use strict'

	class Controller extends Marionette.AppRouter
		routes: 
			'': 'index',
			'Tournaments/Schedule/Team/*id': 'teamFilter'

		index: ->
			$('#main').html('').append(new ScheduleList().render().el)

		teamFilter: (id) ->
			$('#filter .dropdown.open').removeClass('open')
			app.vent.trigger 'filter:team', parseInt(id) || null