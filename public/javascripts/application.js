!function ($) {

  $(function(){
	
    // Disable certain links in docs
    $('section [href^=#]').click(function (e) {
      e.preventDefault()
    })

    // make code pretty
    window.prettyPrint && prettyPrint()

	// scrollTo
	$('.nav li a').bind('click', function(e) {
		e.preventDefault();
		target = this.hash;
		console.log(target);
		$.scrollTo(target, 500, {offset: {top:-60, left:0}});
	})

  })
}(window.jQuery)