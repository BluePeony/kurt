$(document).ready(function(){
$('.nav-link').on('click', function() {
	$('.nav-link').removeClass('nav-link-active');
	$(this).addClass('nav-link-active');
});
});