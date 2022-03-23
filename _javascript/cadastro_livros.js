$(document).ready(function() {
$.ajaxSetup({cache: false})
$.get('./_php/chechSession.php', function (session) {
if (session != "Usuário Não logado"){
    $("#loginbutton").hide();
  }
$("#username_show").text(session);
});
});