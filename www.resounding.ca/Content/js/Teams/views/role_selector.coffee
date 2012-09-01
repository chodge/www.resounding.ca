define [
	'backbone',
	'teams/tournament_application',
], (Marionette, app) ->
	'use strict'

	class View extends Backbone.View
		
		el: '#roles'

		events:
			'click button': 'click'

		click: (e) ->
			$($(e.currentTarget).attr('data-target')).removeClass('hide').addClass('in')

			role = $(e.currentTarget).attr('data-role')
			app.vent.trigger 'change:role', role