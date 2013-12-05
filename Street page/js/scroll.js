$(document).ready(function () {
			// None of the options are set
			$("div#makeMeScrollable").smoothDivScroll({
				autoScrollingMode: "",
		mousewheelScrolling: "allDirections",
		manualContinuousScrolling: true

			});
	// Init colorbox
	$("#makeMeScrollable a").colorbox({ opacity:0.9 ,
	rel:'group1', maxHeight:"80%", maxWidth:"90%" });
});