
var div = $('<div></div>').addClass('paginas'); 
$('#cycle ul').after(div);
$(window).load(function() {
        $('#cycle ul').cycle({ 
            pager: 'div.paginas',
            pause: true,
            timeout: 500,
            speed: 3000, 
            fx:'scrollHorz'
        });

        $('#cycle ul li img').addClass('show');
    
        $('#cycle2 ul').cycle({ 
            pause: true,
            timeout: 500,
            speed: 3000, 
            fx:'scrollHorz'
        });

        $('#cycle2 ul li img').addClass('show');
    
});
