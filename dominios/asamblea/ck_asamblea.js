

$(document).ready(function() {
	console.log("ready!s");

	// Detalle proyecto 
	$('a.ms-toolbar').eq(0).addClass('texto-base');
	
	
	//---- Serch Results 
	$('table tr').removeAttr('width');
	
	console.log($('.ms-vb-title a').html());
});