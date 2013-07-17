$(document).ready(function(){
	$('#intro_content').show();
	$('#name_header').show();
	$('#about_me').hide();
	$('#experience').hide();
	$('#links').hide();
	
	$('#about_me_link').hover(function(){
		$(this).css('color', '#EDD1B7');
		$(this).css('font-weight', 'bold');
		
	}, function() {
		$(this).css('color', '');
		$(this).css('font-weight', '');
	})
	
	$('#experience_link').hover(function(){
		$(this).css('color', '#EDD1B7');
		$(this).css('font-weight', 'bold');
		
	}, function() {
		$(this).css('color', '');
		$(this).css('font-weight', '');
	})
	
	$('#links_link').hover(function(){
		$(this).css('color', '#EDD1B7');
		$(this).css('font-weight', 'bold');
		
	}, function() {
		$(this).css('color', '');
		$(this).css('font-weight', '');
	})
	
	$('#name_header').hover(function(){
		$(this).css('color', '#EDD1B7');
		$(this).css('font-weight', 'bold');
		
	}, function() {
		$(this).css('color', '');
		$(this).css('font-weight', '');	
	})
	
	$('#about_me_link').click(function(){
		$('.active').hide();
		$('.active').removeClass('active');
		$('.current').removeClass('current');
		$('#name_header').show();
		$('#filler_top').css('height','10%');
		$('#about_me').show();
		$('#about_me').addClass('active');
		$('#about_me_link').addClass('current');
	})
	
	$('#experience_link').click(function(){
		$('.active').hide();
		$('.active').removeClass('active');
		$('.current').removeClass('current');
		$('#name_header').show();
		$('#filler_top').css('height','10%');
		$('#experience').show();
		$('#experience').addClass('active');
		$('#experience_link').addClass('current');
	})
	
	$('#links_link').click(function(){
		$('.active').hide();
		$('.active').removeClass('active');
		$('.current').removeClass('current');
		$('#name_header').show();
		$('#filler_top').css('height','10%');
		$('#links').show();
		$('#links').addClass('active');
		$('#links_link').addClass('current');
	})
	
	$('#name_header').click(function(){
		$('.active').hide();
		$('.active').removeClass('active');
		$('.current').removeClass('current');
		$('#name_header').hide();
		$('#filler_top').css('height','20%');
		$('#intro_content').show();
		$('#intro_content').addClass('active');
	})
	
  
});