<!DOCTYPE html>

<html>

    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Basic page">
        <meta name="keywords" content="to be added">

        
        <!-- Configuraçãp para os múltiplos ícones da página-->
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">

        <!-- Stylesheets CSS para estilizar os elementos da página -->
        <link rel="stylesheet" type="text/css" href="../_frameworks/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="../_frameworks/slick/slick.css">
        <link rel="stylesheet" type="text/css" href="../_frameworks/slick/slick-theme.css">
        <link rel="stylesheet" type="text/css" href="../_css/footer.css">
        <link rel="stylesheet" type="text/css" href="../_css/navbar.css">
        <link rel="stylesheet" type="text/css" href="../_css/login.css">
        <link rel="stylesheet" type="text/css" href="../_css/pesquisa.css">

        <!-- Scripts para adição de funcionalidade ao site -->
        <script src="../_frameworks//jquery/jquery-3.6.0.min.js"></script>
        <script src="../_frameworks/bootstrap/js/bootstrap.min.js"></script>
        <script src="../_frameworks/slick/slick.js"></script>
        <script src="../_javascript/pesquisa.js"></script>
        <script src="../_javascript/footer.js"></script>
    </head>

    <body>
        <div class="mainpage">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="mainnavbar">
                </nav>

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="grid search">
                                <div class="grid-body">
                                    <div class="row">
                                        <div class="col-md-3" id="searchfilters">
                                            <h2 class="grid-title"><i class="fa fa-filter"></i> Filtros</h2>
                                            <hr>

                                            <h4>Por categoria:</h4>
                                            <div class="checkbox">
                                                <label><input type="checkbox" class="icheck"> Computação</label>
                                            </div>
                                            <div class="checkbox">
                                                <label><input type="checkbox" class="icheck"> Literatura</label>
                                            </div>
                                            <div class="checkbox">
                                                <label><input type="checkbox" class="icheck"> Biologia</label>
                                            </div>
                                            <div class="checkbox">
                                                <label><input type="checkbox" class="icheck"> Sociologia</label>
                                            </div>
                                            <div class="checkbox">
                                                <label><input type="checkbox" class="icheck"> Filosofia</label>
                                            </div>

                                            <div class="padding"></div>

                                            <h4>Filtros avançados:</h4>
                                            Ano de publicação
                                            <div class="input-group date form_date" data-date="2014-06-14T05:25:07Z"
                                                data-date-format="dd-mm-yyyy" data-link-field="dtp_input1">
                                                <input type="text" class="form-control" id="publish_year_field">
                                                <span class="input-group-addon bg-blue"><i class="fa fa-th"></i></span>
                                            </div>
                                            <input type="hidden" id="dtp_input1" value="">

                                            Editora
                                            <div class="input-group date form_date" data-date="2014-06-14T05:25:07Z"
                                                data-date-format="dd-mm-yyyy" data-link-field="dtp_input2">
                                                <input type="text" class="form-control" id="publisher_field">
                                                <span class="input-group-addon bg-blue"><i class="fa fa-th"></i></span>
                                            </div>
                                            <input type="hidden" id="dtp_input2" value="">


                                        </div>
                                        <div class="col-md-9" id="search_frame">
                                            <h2><i class="fa fa-file-o"></i> Pesquisa</h2>
                                            <hr>
                                            <form method="post" class="input-group">
                                                <input type="text" class="form-control" id="search_field" name = "search_field" placeholder = "Digite o nome do livro ou autor...">
                                                <span class="input-group-btn">
                                                    <button class="btn btn-light btn-hover" type="submit" id="search_button"name="search_button" >
                                                        <img style="width:2em; height:2em;" src="../_images/icons/search.svg" id="logo_search">
                                                    </button>
                                                </form>
                                                </span>

                                            <div class="row" id="searchoptions">
                                                <div class="col-lg">
                                                    <div class="btn-group" id="searchbuttons">
                                                        <button type="button" class="btn btn-light" id="advsearchbtn">
                                                            Pesquisa Avançada
                                                        </button>
                                                        <div id="searchdropdown">
                                                            <label for="orderTypes" > Ordenar por:</label>
                                                            <select name="orderTypes" id="ordertype">
                                                                <option value=””>Nome Crescente</option>
                                                                <option value=””>Nome Decrescente</option>
                                                                <option value=””>Data Crescente</option>
                                                                <option value=””>Data Decrescente</option>
                                                                <option value=””>Popularidade</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                            <div class="notfounddescriptor">
                                                <h5>Nenhum livro que atende a esses critérios de busca foi encontrado...</h5>
                                            </div>
                                            <div class="table-responsive">
                                                <table class="table table-hover">
                                                    <tbody>
                                                    <!-- Resultados devem ser exibidos aqui-->
                                                    <?php 
                                                    
                                                    include("../_php/bd.php");

                                                    	if(array_key_exists('search_button', $_POST)) {
                                                           busca($_POST['search_field']);
                                                        }
                                                    
                                                    function busca($search_text){
                                                        $conn = new Connection();
                                                        $sql = "SELECT * from cadastro_livros 
                                                        where nome like '%$search_text%'
                                                        or autor like '%$search_text%'
                                                        ";
                                                
                                                
                                                     	$resultado = mysqli_query($conn->connection, $sql);
							                            $num = 0;
                                                     if ($resultado->num_rows > 0){

                                                     while($rowData = mysqli_fetch_array($resultado)){
                                                            echo "
                                                            <div class='searchresultframe' name = 'searchresult' id='resultframe" . $num . "' style='animation-delay:" . 0.35*($num+1) . "s'>
                                                            <div id='bookimageframe'>
                                                                <img src='../_images/livros/" . $rowData['site_imagem'] . "' id='bookimg'>
                                                            </div>
                                                            <div id='bookinfoframe'>
                                                                <h4 id='booktitle'>Título: " . $rowData['nome'] . "</h4>

                                                                <div id='bookinternalinfo'>

                                                                    <h5 id='bookauthor'>Autor: " . $rowData['autor'] . "</h5>
                                                                    <h5 id='bookedition'>ISBN: " . $rowData['isbn'] . "</h5>

                                                                </div>
                                                                <div id='bookinternalinfo'>

                                                                    <h5 id='bookeditor'>Editora: ".$rowData['editora']."</h5>
                                                                    <h5 id='bookvolume'>Referências: " . $rowData['referencias'] . "</h5>

                                                                </div>
                                                                <div id='bookinternalinfo'>

                                                                    <h5 id='bookyear'>Ano: ". $rowData['ano_public']."</h5>

                                                                </div>
                                                                
                                                                <h4 id='booklocation'>Localização: ". $rowData['localizacao']."</h4>
                                                            </div>
                                                            <div id='bookdataframe'>
                                                                <p id='bookavailable'>Disponíveis: " . $rowData['disponivel'] . "</p>

                                                                <button class='btn btn-light btn-hover bookbutton' type='button' id = 'reservebutton'>Reservar</button>
                                                                <button class='btn btn-light btn-hover bookbutton' type='button' id = 'returnbutton'>Devolver</button>
                                                                <button class='btn btn-light btn-hover bookbutton' type='button' id = 'renewbutton'>Renovar</button>
                                                            </div>
                                                            </div>";
								$num = $num + 1;
                                                     }

                                                     mysqli_close($conn->connection);
                                                    }
                                                    }
                                                    
                                                    ?>
                                                    
                                                    <!-- Resultados devem ser exibidos aqui-->
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="bg-primary text-center text-lg-start" id="mainfooter">
            </footer>
        </div>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">

        </div>

    </body>

</html>