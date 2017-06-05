function cambioNav (){
	var scroll = window.pageYOffset; // Retorna los píxeles desplazados verticalmente
	var nav = document.getsElementsByClassName("cont-menu");
	var contenedorLogo = document.getsElementsByClassName("cont-logo");
	var contenedorMenu = document.getsElementsByClassName("menu");
	var botonSignUp = document.getsElementsByClassName("boton-signup");
	var letra = document.getsElementsByClassName("letra");

	if(scroll != 0){
		botonSignUp.classList.toggle("display-boton");
	}
}

window.addEventListener('scroll', cambioNav);