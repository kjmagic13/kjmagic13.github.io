$(function() {
	var docHeight, footerHeight, footerTop;
	docHeight = $(window).height();
	footerHeight = $("#page-footer").height();
	footerTop = $("#page-footer").position().top + footerHeight;
	if (footerTop < docHeight) {
		return $("#page-footer").css("margin-top", (docHeight - footerTop) + "px");
	}
});
