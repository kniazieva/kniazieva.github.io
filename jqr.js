$(function(){
    $('.newcontent').hide();
	$('h5.newtitle').click(function(){
		$(this).next().slideToggle('slow').siblings(
		'div:visible').slideUp('slow');
	});
});
