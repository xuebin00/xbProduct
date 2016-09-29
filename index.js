/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-28 18:31:47
 * @version $Id$
 */

$(function (){
	$('#lan a').click(function (){
		$('#lan_list').show();
	});

	$('#lan_list li').click(function (){
		$('#lan a').text($(this).html());
		$('#lan_list').css('display','none');
	});
});