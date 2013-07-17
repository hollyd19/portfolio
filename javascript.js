$(document).ready(function(){
	$('#intro_content').show();
	$('#name_header').show();
	$('#about_me').hide();
	$('#experience').hide();
	$('#links').hide();
	
	$('#about_me_link').hover(function(){
		$(this).css('color', '#EDD1B7');
		/*$(this).css('color', '#929685');*/
		
		$(this).css('font-weight', 'bold');
		
	}, function() {
		$(this).css('color', '');
		$(this).css('font-weight', '');
	})
	
	$('#experience_link').hover(function(){
		$(this).css('color', '#EDD1B7');
		/*$(this).css('color', '#929685');*/
		
		$(this).css('font-weight', 'bold');
		
	}, function() {
		$(this).css('color', '');
		$(this).css('font-weight', '');
	})
	
	$('#links_link').hover(function(){
		$(this).css('color', '#EDD1B7');
		/*$(this).css('color', '#929685');*/
		
		$(this).css('font-weight', 'bold');
		
	}, function() {
		$(this).css('color', '');
		$(this).css('font-weight', '');
	})
	
	$('#name_header').hover(function(){
		$(this).css('color', '#EDD1B7');
		/*$(this).css('color', '#929685');*/
		$(this).css('font-weight', 'bold');
		
	}, function() {
		$(this).css('color', '');
		$(this).css('font-weight', '');	
	})
	
	$('#about_me_link').click(function(){
		$('.current').removeClass('current');
		$('#about_me_link').addClass('current');
		$('.active').slideUp(500, function() {
			$('.active').removeClass('active');
			$('#about_me').slideDown(500);
			$('#about_me').addClass('active');
			
		})
		
	})
	
	$('#experience_link').click(function(){
		$('.current').removeClass('current');
		$('#experience_link').addClass('current');
		$('.active').slideUp(500, function() {
			$('.active').removeClass('active');
			$('#experience').slideDown(500);
			$('#experience').addClass('active');
			
		})
		
	})
	
	$('#links_link').click(function(){
		$('.current').removeClass('current');
		$('#links_link').addClass('current');
		$('.active').slideUp(500, function() {
			$('.active').removeClass('active');
			$('#links').slideDown(500);
			$('#links').addClass('active');
			
		})
		
	})
	
	$('#name_header').click(function(){
		var t = $('#intro_content').hasClass('active');
		if (t == true) {
			
		} else {
		$('.active').slideUp(500);
		$('.active').removeClass('active');
		$('.current').removeClass('current');
		$('#intro_content').slideDown(500);
		$('#intro_content').addClass('active');
		}
	})
	
  
});