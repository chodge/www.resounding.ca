define [
	'backbone.marionette',
	'teams/tournament_application'
], (Marionette, app) ->
	class Controller extends Marionette.AppRouter
		routes:
			'Tournaments/Players/:id/edit': 'editPlayer'
			'Tournaments/Players/:id': 'showPlayer'

		editPlayer: (id) ->
			app.vent.trigger('edit:player', parseInt(id))

		showPlayer: (id) ->
			app.vent.trigger('show:player', parseInt(id))