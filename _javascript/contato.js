$(document).ready(function() {
	$("#staticBackdrop").load("./login.html");
			$("#mainnavbar").load("./navbar.html");
			$("#mainfooter").load("./footer.html");

			// Button press skeleton functions
			$("#loginbutton").click(function () {
				$(".mainpage").css("filter", "blur(5px)");
				console.log("blurred");
			});
			$(document).on('click', '#closelogwindow', function () {
				$(".mainpage").css("filter", "blur(0px)");
				console.log("removed blur");
			});
			$.ajaxSetup({cache: false})
			$.get('../_php/chechSession.php', function (data) {
			session = data;
			if (session != "Usuário Não logado"){
				$("#loginbutton").hide();
			  }
			$("#username_show").text(session);
			});
	
});
