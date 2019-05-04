( function( $ ) {
	'use strict';

	$('.theme_panel .toggle_bts').on('click', 'a.sett', function(){
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
            $('.theme_panel').removeClass('active');
		}
		else {
			$(this).addClass('active');
            $('.theme_panel').addClass('active');
		}
		return false;
	});

	//colors panel
	$('.theme_panel .layout_style').on('click', 'a', function(){
		$(this).closest('.segment').find('a').removeClass('active');
		$(this).addClass('active');

		var color = $(this).attr('data-color');
		var ui = 'css';

		if($('.theme-style-classic').length){
			ui = 'css-classic';
		}
        
        if( !$('#demo_animate_css').length ) {
        	$('head').append('<link rel="stylesheet" id="demo_layout_css" href="https://ryan.beshley.com/bar/'+ui+'/'+color+'.css" />');
        } else {
        	$('#demo_layout_css').attr('href', 'https://ryan.beshley.com/bar/'+ui+'/'+color+'.css');
        }
        return false;
	});

	//animation panel
	$('.theme_panel .animate_style').on('click', 'a', function(){
		$(this).closest('.demo_list').find('a').removeClass('active');
		$(this).addClass('active');

		var animate = $(this).attr('data-animation');
        
        if( !$('#demo_animate_css').length ) {
        	$('head').append('<link rel="stylesheet" id="demo_animate_css" href="https://ryan.beshley.com/bar/css/animation_'+animate+'.css" />');
        } else {
        	$('#demo_animate_css').attr('href', 'https://ryan.beshley.com/bar/css/animation_'+animate+'.css');
        }

        return false;
	});
    
    //dark panels
    if($('.theme-style-dark').length){
    	$('a[data-dark="dark"]').closest('.demo_list').find('a').removeClass('active');
		$('a[data-dark="dark"]').addClass('active');
	}
    $('.theme_panel .dark_style').on('click', 'a', function(){
    	$(this).closest('.demo_list').find('a').removeClass('active');
		$(this).addClass('active');
    	
		var dark = $(this).attr('data-dark');

		if($('.theme-style-dark').length){
			if(dark == 'dark') {
				return false;
			} else {
				location.href = 'https://ryan.beshley.com/v3/';
			}
		} else {
        
	        if(dark == 'dark' && !$('#demo_dark_css').length) {
	            $('head').append('<link rel="stylesheet" id="demo_dark_css" href="https://ryan.beshley.com/wp-content/themes/ryancv/assets/css/dark.css" />');
	        } else {
	            $('#demo_dark_css').remove();
	        }
	    }

        return false;
	});

	//direction panel
	var current_url = location.href;
	if( current_url.indexOf('https://ryan.beshley.com/v5/') != -1 ) {
		$('.direction_style a[href="/v5/"]').closest('.demo_list').find('a').removeClass('active');
		$('.direction_style a[href="/v5/"]').addClass('active');
	}

} )( jQuery );