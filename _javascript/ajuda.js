$(document).ready(function() {
    $('#generalnavbutton').click(function () {
        $('.generalnav').css('display', 'block');
        $('.startpage').css('display', 'none');
        $('.booksearch').css('display', 'none');
        $('.dologin').css('display', 'none');
    });

    $('#startpagebutton').click(function () {
        $('.generalnav').css('display', 'none');
        $('.startpage').css('display', 'block');
        $('.booksearch').css('display', 'none');
        $('.dologin').css('display', 'none');
    });

    $('#booksearchbutton').click(function () {
        $('.generalnav').css('display', 'none');
        $('.startpage').css('display', 'none');
        $('.booksearch').css('display', 'block');
        $('.dologin').css('display', 'none');
    });

    $('#dologinbutton').click(function () {
        $('.generalnav').css('display', 'none');
        $('.startpage').css('display', 'none');
        $('.booksearch').css('display', 'none');
        $('.dologin').css('display', 'block');
    });

    $.ajaxSetup({cache: false})
    $.get('../_php/chechSession.php', function (session) {
    if (session != "Usuário Não logado"){
        $("#loginbutton").hide();
      }
    $("#username_show").text(session);
    });
});