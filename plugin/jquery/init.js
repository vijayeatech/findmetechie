$(document).ready(function(){
	
	$('#login-hover').click(function() {
		$('.login-box').toggle();
	});

	$('#buildButton').click(function() {
		$('.homeRow2').hide();
		$('.homeRow2-detail').show();
	});
	$('#development-next').click(function() {
		$('#development-tab').removeClass('active');
		$('#ui-tab').addClass('active');
    $('#development').removeClass('active');
		$('#ui').addClass('active');
	});
	$('#ui-next').click(function() {
		$('#ui-tab').removeClass('active');
		$('#qa-tab').addClass('active');
    $('#ui').removeClass('active');
		$('#qa').addClass('active');
	});
	$('#qa-next').click(function() {
		$('.tabbable').hide();
		$('.submit-form').show();
	});
	$('#link-to-submit').click(function(e) {
		e.preventDefault();
		$('.tabbable').hide();
		$('.submit-form').show();
	});
});
