define [
	'underscore',
	'backbone.marionette',
	'teams/tournament_application',
	'text!teams/templates/teamViews.html'
], (_, Marionette, app, html) ->
	'use strict'

	basicHtml = $(html).find('#player-basic').html()
	detailHtml = $(html).find('#player-detail').html()
	editHtml = $(html).find('#player-edit').html()

	class View extends Marionette.ItemView

		events:
			'click .delete': 'onDeleteClick'

		initialize: ->
			app.vent.on('edit:player', @onEdit, this)
			@model.on('remove', @onDelete, this)
			super
			@$el.attr('id', 'player-' + @model.id)
			tmpl = if @model.canSeeDetails() then detailHtml else basicHtml
			@template = _.template(tmpl)
			@render()

		render: ->
			super
			
			positionPlayers = @model.collection.filter (
				(player) =>
					player.get('Position') == @model.get('Position')
			)
			if _.indexOf positionPlayers, @model then @$('.position').addClass('visible-phone')

			@$el.addClass('player container')

			if @model.canSeeDetails() then @$el.addClass('player-detail')
			if not @model.get('Permissions').U
				@$('.edit').remove()

			if not @model.get('Permissions').D
				@$('.delete').remove()

		remove: ->

		onEdit: (id) ->
			if id == @model.id
				@close()
				new EditView model: @model, el: @el

		onDelete: ->
			@close()
			@$el.remove()

		onDeleteClick: (e) ->
			e.preventDefault()
			if confirm('Are you sure you want to remove this player?')
				debugger
				@model.destroy()
				@model.collection.remove @model

	class EditView extends Marionette.ItemView
		events:
			'click .save': 'onSave'

		ui:
			$name: '[name=name]',	
			$number: '[name=number]',
			$position: '[name=position]',
			$email: '[name=email]',
			$phone: '[name=phone]'

		initialize: ->
			@model.on('change', @showReadView, this)
			app.vent.on('show:player', @onCancel, this)
			super
			@template = _.template(editHtml)
			@render()

		close: ->

		onSave: ->
			@model.save(
				Name: @ui.$name.val(),
				Number: @ui.$number.val(),
				Position: @ui.$position.val(),
				Email: @ui.$email.val(),
				PhoneNumber: @ui.$phone.val()
			)

		render: ->
			super
			@ui.$position
				.append(
					$('<option></option>')
					.attr('value', @model.get('Position'))
					.text(@model.get('Position'))
				).val(@model.get('Position'))

		showReadView: ->
			@close()
			new View model: @model, el: @el

		onCancel: (id) ->
			if id == @model.id
				@showReadView()
				

	ReadView: View,
	EditView: EditView