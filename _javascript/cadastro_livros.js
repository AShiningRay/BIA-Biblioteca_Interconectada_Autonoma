$(document).ready(function() {
$.ajaxSetup({cache: false})
$.get('./_php/chechSession.php', function (data) {
session = data;
$("#loginbutton").hide();
$("#username_show").text(session);
});
});