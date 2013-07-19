$(document).ready(function(){
	var mar_side_1 = ($('#q1').width() - $('#who_title').width())/2; 
	var mar_top_1 = ($('#q1').height() - $('#about_div_title').height())/2;
	$('#about_div_title').css('margin-left', mar_side_1);
	$('#about_div_title').css('margin-top', mar_top_1);
	
	var mar_side_2 = ($('#q2').width() - $('#where_title').width())/2; 
	var mar_top_2 = ($('#q2').height() - $('#background_div_title').height())/2;
	$('#background_div_title').css('margin-left', mar_side_2);
	$('#background_div_title').css('margin-top', mar_top_2);
	
	var mar_side_3 = ($('#q3').width() - $('#what_title').width())/2; 
	var mar_top_3 = ($('#q3').height() - $('#experience_div_title').height())/2;
	$('#experience_div_title').css('margin-left', mar_side_3);
	$('#experience_div_title').css('margin-top', mar_top_3);
	
	var mar_side_4 = ($('#q4').width() - $('#how_title').width())/2; 
	var mar_top_4 = ($('#q4').height() - $('#contact_div_title').height())/2;
	$('#contact_div_title').css('margin-left', mar_side_4);
	$('#contact_div_title').css('margin-top', mar_top_4);
	
	$('#background_div_title').show();
	$('#experience_div_title').show();
	$('#contact_div_title').show();

	$('#about_div_title').show();
	$('#background_div_title').show();
	$('#experience_div_title').show();
	$('#contact_div_title').show();
	
	$('#about_content').hide();
	$('#experience_content').hide();
	$('#background_content').hide();
	$('#contact_content').hide();
	
	
	$('#q1').hover(function(){
		$(this).animate({backgroundColor: 'rgba(200,201,255, 1)'});
		$('#about_div_title').animate({marginTop: '5%', marginLeft: '5%'});
		$('#about_content').slideDown(100);
		
		
	}, function() {
		$(this).animate({backgroundColor: '#fff'});
		$('#about_content').slideUp(100);
		$('#about_div_title').animate({marginTop: "20%", marginLeft: '25%'});
	})
	
	$('#q2').hover(function(){
		$(this).animate({backgroundColor: 'rgba(172,245,190, 1)'});
		$('#background_div_title').animate({marginTop: '5%', marginLeft: '5%'});
		$('#background_content').slideDown(100);

		
	}, function() {
		$(this).animate({backgroundColor: '#fff'});
		$('#background_content').slideUp(100);
		$('#background_div_title').animate({marginTop: "20%", marginLeft: '25%'});
	})
	
	$('#q3').hover(function(){
		$(this).animate({backgroundColor: 'rgba(255,212,255, 1)'});
		$('#experience_div_title').animate({marginTop: '5%', marginLeft: '5%'});
		$('#experience_content').slideDown(100);

		
	}, function() {
		$(this).animate({backgroundColor: '#fff'});
		$('#experience_content').slideUp(100);
		$('#experience_div_title').animate({marginTop: "20%", marginLeft: '25%'});
	})
	
	$('#q4').hover(function(){
		$(this).animate({backgroundColor: 'rgba(255,255,156, 1)'});
		$('#contact_div_title').animate({marginTop: '5%', marginLeft: '5%'});
		$('#contact_content').slideDown(100);

		
	}, function() {
		$(this).animate({backgroundColor: '#fff'});
		$('#contact_content').slideUp(100);
		$('#contact_div_title').animate({marginTop: "20%", marginLeft: '25%'});
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
	
  
});