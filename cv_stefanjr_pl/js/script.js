$(document).ready(function(){
	$('.navbar-nav>li>a[href]').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top},1000);
	});

	/*
	$('.btnTop').click(function(event){

		//event.preventDefault();

		$('html, body').animate({scrollTop:0},1000);



	});
	
	$('.btnTop').css('top',$(window).height()-40);

	$(window).scroll(function(){
		

		if($(this).scrollTop()>$('header').offset().top){

			
			$('.btnTop').show();

		} else {
			
		}

	
	});*/
	
});