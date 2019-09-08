//var login = document.querySelector("#login");
//var login = document.getElementsByClassName("box_login");

function abrirModal(id_Modal) {
  var modal_usuario = document.getElementById(id_Modal);
  if(modal_usuario){
  modal_usuario.classList.add("exibir");
  modal_usuario.addEventListener("click",function(e){
  	e.preventDefault();
  	console.log(e.target.id);
  	if(e.target.id == id_Modal || e.target.className == "fechar"){
         modal_usuario.classList.remove("exibir");
  	     }
   });
  } 
}


var login = document.getElementById("login");

login.addEventListener("click", function(e){
	e.preventDefault(); // não atualiza a pagina
    iniciaModal("logar");
});

var usuario = document.getElementById("usuario");

usuario.addEventListener("click", function(e){
	e.preventDefault();

	abrirModal("cadastro_usuario");
});



