function iniciar_Modal(id_Modal) {
    var modal = document.getElementById(id_Modal);
    modal.classList.add("exibir");
    modal.addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target.id == id_Modal || e.target.className == "fechar") {
            modal.classList.remove("exibir");
        }
    });
}

var login = document.getElementById("login");

login.addEventListener("click", function (e) {
    e.preventDefault();
    iniciar_Modal("logar");
});

var local = document.getElementById("local");

local.addEventListener("click", function (e) {
    e.preventDefault();
    iniciar_Modal("mapa");
});

var Contato_email = document.getElementById("email");

Contato_email.addEventListener("click", function (e) {
    e.preventDefault();
    iniciar_Modal("contato");
});
