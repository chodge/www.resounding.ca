define [
	'app',
	'backbone'
], (app, Backbone) ->
	'use strict'

	Toolbar = Backbone.View.extend
		
		el: '#filter'

		events:
			'click a.view': 'viewChange'
			'click a.team-filter': 'teamFilter'

		viewChange: (e) ->
			$this = $(e.currentTarget)

			@$('li').removeClass('active')
			$this.parent().addClass('active')

			view = $this.text()
			app.vent.trigger 'change:view', view

		teamFilter: (e) ->
			$this = $(e.currentTarget)

			@$('.current-team-filter').text($this.text())
						
			id = parseInt($this.attr('data-id')) or null
			app.vent.trigger 'filter:team', id