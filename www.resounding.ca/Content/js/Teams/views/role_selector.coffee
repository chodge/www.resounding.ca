define [
	'backbone'
], (Marionette) ->
	'use strict'

	class View extends Backbone.View
		
		el: '#roles'

		events:
			'click button': 'click'

		click: (e) ->
			role = $(e.currentTarget).attr('data-role')
			window.TournamentApp.vent.trigger 'change:role', role