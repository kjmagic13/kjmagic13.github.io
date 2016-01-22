---
---

$ ->

	# masonry
	$container = $('.masonry-container')
	$container.imagesLoaded ->
		$container.masonry
			columnWidth: '.masonry-item'
			itemSelector: '.masonry-item'
		return

	# helpscout beacon
	$(document).on 'click', '.open-hsbeacon', (e) ->
		e.preventDefault()
		HS.beacon.open()
		# topic = $(this).data('topic')
		# if topic
		# 	change beacon topic select to topic var
		return

	# WOW js
	new WOW().init()

	# sticky footer
	docHeight = $(window).height()
	footerHeight = $("#page-footer").height()
	footerTop = $("#page-footer").position().top + footerHeight
	$("#page-footer").css "margin-top", (docHeight - footerTop) + "px"  if footerTop < docHeight
