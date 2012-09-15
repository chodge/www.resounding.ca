define [
	'app',
	'underscore',
	'plugins/backbone.marionette',
	'plugins/text!templates/scheduleViews.html'
], (app, _, Marionette, html) ->
	'use strict'

	$html = $(html)
	toolbarHtml = $html.find('#toolbar').html()
	teamFilterItemHtml = $html.find('#team-filter-item').html()

	class Toolbar extends Marionette.ItemView
		
		template: _.template(toolbarHtml)

		events:
			'click a.view': 'viewChange'
			'click a.team-filter': 'teamFilter'

		render: ->
			super
			$.ajax('/Tournaments/api/Teams/Basic/All')
				.done((teams) =>					
					teamsHtml = _.reduce(teams, (memo, team) ->
						memo += _.template(teamFilterItemHtml, team)
					, '')
					@$('ul.teams').html(teamsHtml)
				)


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
			if id < 0 then id = null
			app.vent.trigger 'filter:team', id