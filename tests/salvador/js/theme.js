jQuery(document).ready(function($) {
	
	// tab panes image switcher
	$('a[data-toggle="tab"]').click(function(){
		tab = $(this).attr('href');
		img_src = $('img', tab).attr('src');

		if ( $(tab).hasClass('amenity-tab') ) {
			switch_image('img.amenity-switch-image', img_src);
		} else if ( $(tab).hasClass('feature-tab') ) {
			switch_image('img.feature-switch-image', img_src);
		}
	});
	switch_image = function(target_img, img_src) {
		if (img_src) {
			$(target_img).attr('src', img_src);
		}
	};

	// horizontal carousel scroller
	$('.horizontal-scroller').scrollingCarousel( {
		looped: false
	});

	// hover image maps
	$('.hover-imagemap').mapster({
		fillColor: 'f1c40f',
		fillOpacity: 0.5,
		isSelectable: false
	});

	$("map.fyph area, a.remote-hover").fancybox({
		afterLoad: function(){
			var caption = '<h4>'+$(this.element).attr('title')+'</h4><a href="'+$(this.element).data('floorplan-download')+'" download>Download Floorplan</a>';
			this.title = caption;
		},
		helpers: {
			title : {
				type : 'inside'
			}
		}
	});

	$('a.remote-hover').hover(function(){
		$('area[alt="'+$(this).data('select')+'"]').mapster('select');
	}, function() {
		$('area[alt="'+$(this).data('select')+'"]').mapster('deselect');
	});

	// horizPan
	$('.fancybox-image').each(function(){
		height = $(this).attr('height') || 320;
		$(this).wrap('<div class="horizPanContainer" data-scroll="true">');
		$(this).closest('.horizPanContainer').css( 'height', height+'px' );
	});
	
	// autoscroll?
	var autoScroll = setInterval(function(){
		$('.horizPanContainer').each(function (e) {

			if ( $(this).data('scroll') ) {
				currentScroll = $(this).scrollLeft();
				maxScroll = (this.scrollWidth - this.clientWidth);

				if ( currentScroll >= maxScroll ) {
					$(this).data('reverse', true);
				} else if ( currentScroll <= 0 ) {
					$(this).data('reverse', false);
				}

				if ($(this).data('reverse')) {
					$(this).scrollLeft( currentScroll-1 );
				} else {
					$(this).scrollLeft( currentScroll+1 );
				}
			}
		});
	}, 25);


	$('.horizPanContainer').mousemove(function (e) {
		maxScroll = (this.scrollWidth - this.clientWidth);
		percentage = (e.pageX - $(this).offset().left) / this.clientWidth;
		mousePosX = maxScroll * percentage;
		$(this).scrollLeft( mousePosX );
		$(this).data('scroll', false);
	});
	$('.horizPanContainer').mouseleave(function(){
		$(this).data('scroll', true);
	});

});