// Pie charts functionality
function animatePieCharts() {
	if (typeof $.fn.easyPieChart != 'undefined') {

		$(".pie-chart").each(function() {
			var $t = $(this);
			var n = $t.parent().width();
			var r = $t.attr("data-barSize");

			if (n < r) {
				r = n;
			}

			$t.easyPieChart({
				animate: 2000,
				lineCap: "round",
				lineWidth: $t.attr("data-lineWidth"),
				size: r,
				barColor: $t.attr("data-barColor"),
				trackColor: $t.attr("data-trackColor"),
				scaleColor: "transparent",
				onStep: function(from, to, percent) {
					$(this.el).find('.pie-chart-percent span').text(Math.round(percent));
				}
			});
		});
	}
}


$(document).ready(function() {
	var lastScrollTop = 0;


	// Content formatting functionality
	$(".is_hovered-action").hover(function() {
		$(this).addClass("is_hovered");
	}, function() {
		$(this).removeClass("is_hovered");
	});


	// Magnific popup
	 $(".popup-link").magnificPopup({
            gallery: {
                enabled: true
            },
            mainClass: "mfp-fade",
             image: {
	            verticalFit: false
	          },
        });



	 // ScrollTo functionality
	$(".scroll-to-link").click(function(e) {
		e.preventDefault();
		var target = $(this.hash);
		$("html").scrollTo(target, 1500, {easing: 'easeInOutExpo'});
	});

	$(".bio_info-links").find("li").find("a").click(function(e) {
		e.preventDefault();
		$(".bio_info-links").find("li").removeAttr("class");

		$(this).parent().addClass("is_active");
	});


	$(window).scroll(function() {

		var st = $(this).scrollTop();

		if (st < lastScrollTop) {
			$("#back-top").show();

		} else {
			$("#back-top").hide();
		}
		if (st == 0) {
			$("#back-top").hide();

			$(".bio_info-links").find("li").removeAttr("class");
		}

		lastScrollTop = st;
	});
	// End of window.scroll



    // MixitUp functionality
    $('#mixit').mixItUp({
    	animation: {
			duration: 260,
			effects: 'fade',
			easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
		}
    });

    $(".portfolio-info-list-filter").find("a:first-child").addClass("active");


	// Pie charts echo
	animatePieCharts();


$(window).load(function() {
	animatePieCharts();
	/* Act on the event */

	$(".bio_info-links").find("li:first-child .scroll-to-link").trigger("click");
});



});
// End of document.ready
