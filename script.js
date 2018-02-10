//javaScript Dcument
// alert ("Llamdo al archivo javaScript exitoso exitoso");
function validation () {
	
	var user = document.getElementById("username")
	var pass = document.getElementById("password")
	var email = document.getElementById("email")

	if (user === ""){
		alert("Por favor digite el Usuario.");
		return false;
	}
	if (pass === "") {
		alert("Por favor digite la Clave.");
		return false;
	}

	if (email === "") {
		alert("Por favor digite el correo electrónico;");
		return false;
	}

}