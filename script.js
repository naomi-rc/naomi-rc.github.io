$(function()
{
	$('.open-gallery').click(function(){
		var path = $(this).attr('src');
		$('#modal-image').attr('src', path);

		var modal = $('#modal');
		modal.show();

		$('.close').click(function(){
			modal.hide();
		});
	});
});
