$(document).ready(function() {
    $('#staticBackdrop').load('./login.html');
    $('#mainnavbar').load('./navbar.html');
    $('#mainfooter').load('./footer.html');

    // Button press skeleton functions
    $('#loginbutton').click(function () {
        $('.mainpage').css('filter', 'blur(5px)');
    });
    $(document).on('click', '#closelogwindow', function () {
        $('.mainpage').css('filter', 'blur(0px)');
    });

    $(document).on('click', '#search_button', function () {
        console.log(); // A ser alterado com um codigo que otimize a funcao abaixo
    });

    $(".ichecklabel").on("click", function() { // Altera a cor do fundo da categoria selecionada
        $('.ichecklabel').not(this).css("background-color", "inherit");    
        $(this).css("background-color", "#ef2f54");
        console.log("checked");
      });

    setInterval(checkSearch, 500); // Roda a checagem de livros a cada meio segundo, 
                                   // deve ser otimizado no futuro.

    document.getElementById('ordertype').onchange = checkOrderType;

    $.ajaxSetup({cache: false})
    $.get('../_php/chechSession.php', function (session) {
        if (session != "Usuário Não logado"){
            $("#loginbutton").hide();
          }
        $("#username_show").text(session);
    });
});

$(document).on('click', '#advsearchbtn', function () {
    if ($('#searchfilters').css('display') == 'none') {
        $('#searchfilters').css('display', 'block');
        $('#advsearchbtn').text('Pesquisa Simples');
        $('#search_frame').css('width', '75%');
    } else {
        $('#searchfilters').css('display', 'none');
        $('#advsearchbtn').text('Pesquisa Avançada');
        $('#search_frame').css('width', '100%');
    }
});

function checkSearch() {
    let numbooks = document.getElementsByName('searchresult');
    if(numbooks.length > 0){ // Se há ao menos 1 livro, exiba os resultados
        $('.table-responsive').css('display', 'block');
        $('.notfounddescriptor').css('display', 'block');
        $('.notfounddescriptor').css('border', '2px solid #297a7d');
        $('.notfounddescriptor').css('width', '100%');
        $('.notfounddescriptor').css('margin-left', '0%');
        $('.notfounddescriptor').css('padding', '0%');
        $('.notfounddescriptor').css('font-size', '1.25em');
        $('.notfounddescriptor').text('Quantidade de resultados encontrados: ' + numbooks.length.toString() );
    }
    else {
        $('.table-responsive').css('display', 'none');
        $('.notfounddescriptor').css('display', 'block');
        $('.notfounddescriptor').css('border', '8px double #297a7d');
        $('.notfounddescriptor').css('width', '90%');
        $('.notfounddescriptor').css('margin-left', '5%');
        $('.notfounddescriptor').css('padding', '2%');
        $('.notfounddescriptor').css('font-size', '1.1em');
        $('.notfounddescriptor').text('Nenhum livro que atende a esses critérios de busca foi encontrado...');
    }
};

function checkOrderType() {
    let orderType = this.value;

    if(orderType === 'TitleA_Z')
        sortElements('Title', 'Asc');
        
     else if(orderType === 'TitleZ_A') 
        sortElements('Title', 'Dec');

     else if(orderType === 'AuthorA_Z') 
        sortElements('Author', 'Asc');

     else if(orderType === 'AuthorZ_A') 
        sortElements('Author', 'Dec');

     else if(orderType === 'Date0_9') 
        sortElements('Date', 'Asc');

     else if(orderType === 'Date9_0') 
        sortElements('Date', 'Dec');

     else if(orderType === 'Available') 
        sortElements('Available', 'Dec');

     else 
        console.log('Not Ordering');
};

function sortElements(field_type, sort_type) {
    // Pega um snapshot dos resultados da busca e os salva
    let elementsArray = Array.from(document.querySelectorAll('[name="searchresult"]')), sorted_elements;

    // Remove os itens do documento para posteriormente inseri-los ordenados
    document.querySelectorAll('[name="searchresult"]').forEach(function(element){
        element.remove()
    });

    // seleciona o campo usado para ordenar
    if(field_type === 'Title') {
        // Ordena os elementos com base no resultado obtido na comparação dos campos de título (mesmos valores do strcmp)
        sorted_elements = elementsArray.sort(function(elem1, elem2) {
            if(elem1.children[1].children[0].innerHTML > elem2.children[1].children[0].innerHTML)
                return 1;
            else if(elem1.children[1].children[0].innerHTML < elem2.children[1].children[0].innerHTML)
                return -1;
            else return 0;
        });

    } else if(field_type === 'Author') {
        // Ordena os elementos verificando os campos de autor
        sorted_elements = elementsArray.sort(function(elem1, elem2) {
            if(elem1.children[1].children[1].children[0].innerHTML > elem2.children[1].children[1].children[0].innerHTML)
                return 1;
            else if(elem1.children[1].children[1].children[0].innerHTML < elem2.children[1].children[1].children[0].innerHTML)
                return -1;
            else return 0;
        });

    } else if(field_type === 'Date') {
        // Ordena os elementos verificando os campos de data
        sorted_elements = elementsArray.sort(function(elem1, elem2) {
            if(elem1.children[1].children[3].children[0].innerHTML > elem2.children[1].children[3].children[0].innerHTML)
                return 1;
            else if(elem1.children[1].children[3].children[0].innerHTML < elem2.children[1].children[3].children[0].innerHTML)
                return -1;
            else return 0;
        });

    } else if(field_type === 'Available') {
        // Ordena os elementos verificando os campos de disponibilidade
        sorted_elements = elementsArray.sort(function(elem1, elem2) {
            if(elem1.children[2].children[0].innerHTML > elem2.children[2].children[0].innerHTML)
                return 1;
            else if(elem1.children[2].children[0].innerHTML < elem2.children[2].children[0].innerHTML)
                return -1;
            else return 0;
        });
    };

    // Adiciona os elementos ordenados de volta ao documento, verificando se é ordem crescente ou decrescente.
    if(sort_type === 'Asc') {
        addElements(sorted_elements, 'Asc');
    }
    else {
        addElements(sorted_elements, 'Dec');
    }
};

function addElements(sorted_elements, order) {
    // Seleciona o elemento responsavel por conter os resultados da busca
    let table = document.getElementById('resultstable');
    // Adiciona os resultados ordenados segundo a ordem recebida
    if(order === 'Asc') {
        for(let i = 0; i < sorted_elements.length; i++) 
            table.appendChild(sorted_elements[i]);
    }
    else {
        for(let i = sorted_elements.length-1; i >= 0; i--) 
            table.appendChild(sorted_elements[i]);
    }
}
