define [
	'underscore',
	'backbone.marionette',
	'text!teams/templates/teamViews.html'
], (_, Marionette, html) ->
	'use strict'

	tmplHtml = $(html).find('#player-detail').html()

	class View extends Marionette.ItemView
		template: _.template(tmplHtml)

		initialize: ->
			super
			@render()