function change_value(input,text){
	$(input).attr('value', text).focus(function(){
		if($(this).val() == text){
			$(this).attr('value', '');
		}
	}).blur(function(){
		if($(this).val() == ''){
			$(this).attr('value', text);
		}
	});
}

$(function(){
	change_value('.search','»щем что-то?');
	$(.'search').click(function(){
		var search = $('.search').val();
		
		if (search){
			$.ajax({
				type:"POST";
				url:"php/search.php";
				data:'search=' + search;
				success: function(response){
					$('#news').html(response);
				}
			});
		}		
	});
});
