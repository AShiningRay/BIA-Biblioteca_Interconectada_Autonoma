$(document).ready(function() {
    $("#staticBackdrop").load("./login.html");
    $("#mainnavbar").load("./navbar.html");
    $("#mainfooter").load("./footer.html");

    // Button press skeleton functions
    $("#loginbutton").click(function () {
        $(".mainpage").css("filter", "blur(5px)");
    });
    $(document).on('click', '#closelogwindow', function () {
        $(".mainpage").css("filter", "blur(0px)");
    });

    $(document).on('click', '#search_button', function () {
        let text = $("#search_field").val(),
        text2 = $("#publish_year_field").val(),
        text3 = $("#publisher_field").val();
        
        console.log("Pesquisando por: ", text, "| Ano: ", text2, "| Editora: ", text3);
    });

    setInterval(checkSearch, 500); // Roda a checagem de livros a cada meio segundo, 
                                   // deve ser otimizado no futuro.
});

$(document).on('click', '#advsearchbtn', function () {
    if ($("#searchfilters").css("display") == "none") {
        $("#searchfilters").css("display", "block");
        $("#advsearchbtn").text("Pesquisa Simples");
        $("#search_frame").css("width", "75%");
    } else {
        $("#searchfilters").css("display", "none");
        $("#advsearchbtn").text("Pesquisa Avançada");
        $("#search_frame").css("width", "100%");
    }
});

function checkSearch() {
    let numbooks = document.getElementsByName("searchresult");
    if(numbooks.length > 0){ // Se há ao menos 1 livro, exiba os resultados
        $(".table-responsive").css("display", "block");
        $(".notfounddescriptor").css("display", "block");
        $(".notfounddescriptor").css("border", "2px solid #297a7d");
        $(".notfounddescriptor").css("width", "100%");
        $(".notfounddescriptor").css("margin-left", "0%");
        $(".notfounddescriptor").css("padding", "0%");
        $(".notfounddescriptor").css("font-size", "1.25em");
        $(".notfounddescriptor").text("Quantidade de resultados encontrados: " + numbooks.length.toString() );
    }
    else {
        $(".table-responsive").css("display", "none");
        $(".notfounddescriptor").css("display", "block");
        $(".notfounddescriptor").css("border", "8px double #297a7d");
        $(".notfounddescriptor").css("width", "90%");
        $(".notfounddescriptor").css("margin-left", "5%");
        $(".notfounddescriptor").css("padding", "2%");
        $(".notfounddescriptor").css("font-size", "1.1em");
        $(".notfounddescriptor").text("Nenhum livro que atende a esses critérios de busca foi encontrado...");
    }
};