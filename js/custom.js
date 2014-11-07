$(function() {

	// contact form, is human?
	$("#isHuman").change(function(){
		if(this.checked) {
			$('#contactSubmit').removeClass("disabled");
		} else {
			$('#contactSubmit').addClass("disabled");
		}
	});
	$("#contactReset").click(function(){
		$('#contactSubmit').addClass("disabled");
	});

	// sticky footer
	var docHeight, footerHeight, footerTop;
	docHeight = $(window).height();
	footerHeight = $("#page-footer").height();
	footerTop = $("#page-footer").position().top + footerHeight;
	if (footerTop < docHeight) {
		return $("#page-footer").css("margin-top", (docHeight - footerTop) + "px");
	}

});
