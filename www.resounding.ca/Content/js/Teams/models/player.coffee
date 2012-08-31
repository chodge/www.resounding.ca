define [
	'backbone'
], (Backbone) ->
	'use strict'

	class Player extends Backbone.Model
		
		idAttribute: 'Id'

		sync: ->

		url: ->
			''

		canSeeDetails: ->
			@get('Permissions')?.R

		canEdit: ->
			@get('Permissions')?.U