define [
	'backbone'
], (Backbone) ->
	'use strict'

	class Player extends Backbone.Model
		
		idAttribute: 'Id'

		url: ->
			'/Tournaments/api/teams/' + @id

		canSeeDetails: ->
			@get('Permissions')?.R

		canEdit: ->
			@get('Permissions')?.U