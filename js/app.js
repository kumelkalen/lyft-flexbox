window.addEventListener('scroll', function () {
var scroll = document.documentElement.scrollTop || window.pageYOffset // Retorna los píxeles desplazados verticalmente
var segundoMenu = document.getElementsByClassName("nav2");

	if(scroll > 50){ 
		segundoMenu.ClassList.remove("display-boton"); // Hacemos visible nuestro segundo menú
	}else{
		segundoMenu.ClassList.add("display-boton"); // Lo volvemos invisible
	}
});
