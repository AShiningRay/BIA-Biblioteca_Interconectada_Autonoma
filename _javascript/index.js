$(document).ready(function() {
	// Formulario de Login
	$("#staticBackdrop").load("./_html/login.html", function () {
		document.getElementById("logo_user").src = "./_images/icons/user.svg";
		document.getElementById("logo_passkey").src = "./_images/icons/passkey.svg";
	});

	// Navbar
	$("#mainnavbar").load("./_html/navbar.html", function () {
		document.getElementById("bia_logo_nav").src = "./_images/logo_bia.png";
		document.getElementById("bia_logo_login").src = "./_images/logo_bia.png";
		document.getElementById("logo_navbar_login").src = "./_images/icons/user.svg";
		document.getElementById("logo_search").src = "./_images/icons/search.svg";
		//Links navbar
		document.getElementById("nav_ajuda").href = "./_html/ajuda.html";
		document.getElementById("nav_contato").href = "./_html/contato.html";
		document.getElementById("nav_sobre").href = "./_html/sobre.html";
		document.getElementById("nav_inicio").href = "./index.html";
		//document.getElementById("botao_pesquisa").onclick = "window.location.href='./_html/pesquisa.html'";
		document.getElementById("botao_pesquisa").setAttribute( "onClick", "javascript: window.location.href='./_html/pesquisa.html';" );
	});

	//Footer
	$("#mainfooter").load("./_html/footer.html", function () {
		document.getElementById("logo_ufcat").src = "./_images/UFCAT_Logo.png";
		document.getElementById("logo_maps").src = "./_images/icons/maps.svg";
		document.getElementById("logo_facebook").src = "./_images/icons/social_media/facebook.svg";
		document.getElementById("logo_twitter").src = "./_images/icons/social_media/twitter.svg";
		document.getElementById("logo_linkedin").src = "./_images/icons/social_media/linkedin.svg";
		document.getElementById("logo_insta").src = "./_images/icons/social_media/instagram.svg";
		document.getElementById("logo_maps").src = "./_images/icons/maps.svg";
		document.getElementById("logo_tele").src = "./_images/icons/call.svg";
		document.getElementById("href_ajuda").href = "./_html/ajuda.html";

	});


	// Funções para casos onde botões são pressionaddos
	$(document).on('click', '#loginbutton', function () {
		$(".mainpage").css("filter", "blur(5px)");
		console.log("blurred");
	});
	$(document).on('click', '#closelogwindow', function () {
		$(".mainpage").css("filter", "blur(0px)");
		console.log("removed blur");
	});

	// Código para o slider de imagens central (carrossel)
	$(".center").slick({
		dots: true,
		arrows: true,
		infinite: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		speed: 400, // Velocidade do scroll manual em msegs
		autoplay: true, // Usado para testar se o scrolling está funcionando
		autoplaySpeed: 5000 // Velocidade do autoscroll em msegs
	});
});