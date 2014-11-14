---
---

$ ->

	# contact form; is human?
	$("#isHuman").change ->
		if @checked
			$("#contactSubmit").removeClass "disabled"
		else
			$("#contactSubmit").addClass "disabled"
		return

	$("#contactReset").click ->
		$("#contactSubmit").addClass "disabled"
		return

  
	# sticky footer
	docHeight = undefined
	footerHeight = undefined
	footerTop = undefined
	docHeight = $(window).height()
	footerHeight = $("#page-footer").height()
	footerTop = $("#page-footer").position().top + footerHeight
	$("#page-footer").css "margin-top", (docHeight - footerTop) + "px"  if footerTop < docHeight
