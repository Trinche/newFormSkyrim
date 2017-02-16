$(document).ready(function(){

console.log("Ready");
$("button").click(function(){
	if ($("#nome").val() == ""||$("#cognome").val() == ""||$("#exampleInputEmail1").val() == ""||$("#telefono").val() == ""||$("#azienda").val() == ""){
		$(".alert").css({"visibility":"visible"});
		$(".img-thumbnail").css({"visibility":"visible"});
	}else{
		data = {
		"nome" : $("#nome").val(),
		"cognome" : $("#cognome").val(),
		"mail" : $("#exampleInputEmail1").val(),
		"telefono" : $("#telefono").val(),
		"azienda" : $("#azienda").val(),
		"note" : $("#note").val()
		}
	console.log(data);
	$(".alert").css({"visibility":"hidden"});
	$(".img-thumbnail").css({"visibility":"hidden"});
	}
	});
});


