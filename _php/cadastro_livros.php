<?php

include ("./bd.php");
$conn = new Connection();

// Check connection
if (!$conn->connection) {
    die("Connection failed: " . mysqli_connect_error());
}
else{
    echo 'Connection successful';
}

$Name = $_POST['nome_livro'];
$Autor = $_POST['autor_livro'];
$Isbn = $_POST['num_isbn'];
$Ano_public = $_POST['data_pub'];
$Editora = $_POST['nome_editora'];
$Referencias = $_POST['referencias'];
$Localizacao = $_POST['localizacao'];
$Disponíveis = $_POST['num_disponivel'];
$Categoria = $_POST['categoria'];
$Edicao = $_POST['edicao'];
$Volume = $_POST['volume'];
$SiteImagem = $_POST['site_imagem'];

$sql = "INSERT INTO `cadastro_livros` (`nome`, `autor`, `isbn`, `ano_public`, `editora`, `referencias`, `localizacao`,`livro_categoria`, `livro_edicao`,`livro_volume`, `qtd_disponivel`, `site_imagem`) 
        VALUES ('$Name', '$Autor', '$Isbn','$Ano_public','$Editora ','$Referencias','$Localizacao','$Categoria','$Edicao','$Volume','$Disponíveis', '$SiteImagem')";


mysqli_query($conn->connection, $sql);

mysqli_close($conn->connection);
header("Location:../_html/cadastro_livros.html");
?>

