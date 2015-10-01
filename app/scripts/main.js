'use strict';

var newsData = {
	news: '<span><h3><a href="#">Lorem ipsum delor</a></h3><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></span><span><h3><a href="#">Lorem ipsum delor</a></h3><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></span><span><h3><a href="#">Lorem ipsum delor</a></h3><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></span>',
	archive: '<span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span><span><h3><a href="#">Lorem ipsum delor</a></h3></span>'
};

$(document).ready(function(){
	$.get( 'scripts/data/code-test.json', function( data ) {
		var $rateTable = $('.rates_table tbody');

		data.forEach(function(datum, index, array){
			var html = 	'<tr>';
				html +=	'<td>' + datum.name + '</td>';
				html +=	'<td>' + datum.apy + ' %</td>';
				html +=	'<td>$' + datum.earnings + '</td>';
				html += '</tr>';
			$rateTable.append(html);
		});
	});

	$('.tab_button').click(function(){
		var $clicked = $(this);
		if(!$clicked.hasClass('active')){
			$('.tab_button.active').removeClass('active');
			$clicked.addClass('active');
			$('.tab_content').html(newsData[$clicked.attr('id')]);
		}
	});

	$('.nav_select').click(function(){
		var $clicked = $(this);
		if(!$clicked.hasClass('active')){
			$('.nav_select').each(function(index, value){
				if($(value).hasClass('active')){
					$(value).removeClass('active');
				}else if($(value).attr('name') === $clicked.attr('name')){
					$(value).addClass('active');
				}
			});
		}
	});

	$('.login_toggle').click(function(){
		var docHeight = $(document).height();
		$('#overlay').height(docHeight);
		$('.modal_grp').toggle();
	});
});