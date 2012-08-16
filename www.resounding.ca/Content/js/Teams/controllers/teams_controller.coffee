define [
	'chaplin',
	'teams/models/teams',
	'teams/models/team',
	'teams/views/teams_list',
	'teams/views/team_detail'
], (Chaplin, Teams, Team, TeamsListView, TeamDetailView) ->
	'use strict'

	class TeamsController extends Chaplin.Controller
		title: 'Resounding Teams'

		historyURL: (params) ->
			if(params.id) 'Tournaments/teams/#{id}' else 'Tournament/teams'

		initialize: ->
			super
			@index()

		index: ->
			teams = new Teams()
			@view = new TeamsListView(
				collection: teams
				render: false
				renderItems: false
			)

		edit: (params) ->
			debugger
			team = new Team(params.id)
			@view = new TeamDetailView model: @team