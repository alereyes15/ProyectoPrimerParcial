//javaScript Dcument
// alert ("Llamdo al archivo javaScript exitoso exitoso");
function validation () {
	
	var user = document.getElementById("username")
	var pass = document.getElementById("password")

	if (user.value === ""){
		alert("Por favor digite el Usuario.");
		
	}
	if (pass.value === "") {
		alert("Por favor digite la Clave.");
		
	}
	return false;

}

function validar(){

	var user = document.getElementById("username")
	var pass = document.getElementById("password")

	if (user.value == pass.value)

	    {

			alert('¡La contraseña no puede ser igual al usuario!');

			pass.focus();

		return;

		}

	else

	{

		/* Si todo está OK se prosigue con el ingreso: */

		    alert('¡Datos válidos, continue!');

		document.form.submit;

	}

}

function menu () {
	var oprimo = document.getElementById("pestaña");

	if(oprimo.style.marginLeft === "-240px"){
		oprimo.style.marginLeft="0px";
	}
	else {
		oprimo.style.marginLeft="-240px";
	}

}


function swich (){

	var change = document.getElementById("cambio");
	//utilice el atributo name porque al usar el atributo src ma mandaba la direccion absoluta, desde el c:/
	if(change.name == "like"){		
		change.src = "nolike.jpg";
		change.name = "nolike"
		
	}

	else{
		change.src = "like.jpg";

		change.name = "like"
	}
}