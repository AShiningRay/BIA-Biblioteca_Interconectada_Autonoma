$(document).ready(function() {
$.ajaxSetup({cache: false})
$.get('./_php/chechSession.php', function (data) {
session = data;
$("#username_show").text(session);
});
});