define [
	'backbone',
	'teams/tournament_application',
], (Marionette, app) ->
	'use strict'

	class View extends Backbone.View
		
		el: '#roles'

		role: 'public'

		events:
			'click [data-role]': 'click',
			'click .btn-danger': 'reset'

		click: (e) ->
			$($(e.currentTarget).attr('data-target')).removeClass('hide').addClass('in')

			@role = $(e.currentTarget).attr('data-role')
			app.vent.trigger 'change:role', @role

		reset: (e) ->
			if confirm 'Are you sure you want to reset the data'
				$.post('/Tournaments/Tournaments/Reset')
					.success ->
						app.vent.trigger 'change:role', @role