define [
	'teams/views/base/view',
	'text!teams/templates/teamViews.html'
], (View, html) ->
	'use strict'

	template = $(html).find('#team-detail').html()

	class View extends View
		template: template

		autoRender: true

		initialize: ->
			@setElement "#team-#{@model.id}"
			super

		render: ->
			return false if @disposed

			templateFunc = @getTemplateFunction()
			data = @getTemplateData()
			html = templateFunc data
			@$el.html(html)

			this


			