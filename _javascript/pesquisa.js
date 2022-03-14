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

    setInterval(checkSearch, 500); // Roda a checagem de livros a cada meio segundo, 
                                   // deve ser otimizado no futuro.

    document.getElementById('ordertype').onchange = checkOrderType;
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
    console.log(orderType);

    if(orderType === 'TitleA_Z'){
        sortbyName_Descending('Title');

    } else if(orderType === 'TitleZ_A') {
        sortbyName_Ascending('Title');

    } else if(orderType === 'AuthorA_Z') {
        sortbyName_Descending('Author');

    } else if(orderType === 'AuthorZ_A') {
        sortbyName_Descending('Author');

    } else if(orderType === 'Date0_9') {
        sortbyDate_Ascending();

    } else if(orderType === 'Date9_0') {
        sortbyDate_Descending();

    } else if(orderType === 'Available') {
        sortbyAvailability();
    } else {
        console.log('Not Ordering');
    }
};

function sortbyName_Ascending(field_type) {
    if(field_type === 'Title') {
        console.log('Ordering by title - ascending');
    } else if(field_type === 'Author') {
        console.log('Ordering by author - ascending');
    }
};

function sortbyName_Descending(field_type) {
    if(field_type === 'Title') {
        console.log('Ordering by title - descending');
    } else if(field_type === 'Author') {
        console.log('Ordering by author - descending');
    }
};

function sortbyDate_Ascending() {
    console.log('Ordering by date - ascending');
}

function sortbyDate_Descending() {
    console.log('Ordering by date - descending');
}

function sortbyAvailability() {
    console.log('Ordering by availability');
}

