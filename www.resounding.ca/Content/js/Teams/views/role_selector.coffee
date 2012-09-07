define [
	'backbone',
	'teams/tournament_application',
	'text!teams/templates/teamViews.html'
], (Marionette, app, html) ->
	'use strict'

	msg = $(html).find('#reset-data-success-message').html()

	class View extends Backbone.View
		
		el: '#roles'

		role: 'public'

		events:
			'click [data-role]': 'click',
			'click #roles .btn-danger': 'reset'

		click: (e) ->
			$('#roles li').removeClass('active')
			$this = $(e.currentTarget)
			$this.parent().addClass('active')
			$($this.attr('data-target')).removeClass('hide').addClass('in')

			@role = $this.attr('data-role')
			app.vent.trigger 'change:role', @role

		reset: (e) ->
			if confirm 'Are you sure you want to reset the data?'
				$('#roles li.open').removeClass('open')
				
				$.post('/Tournaments/Teams/Reset')
					.success ->
						$(msg).appendTo($('#messages'))
						app.vent.trigger 'change:role', @role