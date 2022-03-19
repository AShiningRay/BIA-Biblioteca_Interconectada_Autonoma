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

//Capta o conteúdo do post e remove espaços vazios do início e final das strings.
$Name = trim($_POST['nome_livro']);
$Autor = trim($_POST['autor_livro']);
$Isbn = trim($_POST['num_isbn']);
$Ano_public = trim($_POST['data_pub']);
$Editora = trim($_POST['nome_editora']);
$Referencias = trim($_POST['referencias']);
$Localizacao = trim($_POST['localizacao']);
$Disponíveis = trim($_POST['num_disponivel']);
$Categoria = trim($_POST['categoria']);
$Edicao = trim($_POST['edicao']);
$Volume = trim($_POST['volume']);
$SiteImagem = trim($_POST['site_imagem']);

$sql = "SELECT * FROM cadastro_livros where nome = '$Name' 
                                            and autor = '$Autor' 
                                            and isbn = '$Isbn'
                                            and ano_public = '$Ano_public'
                                            and editora = '$Editora'
                                            and livro_edicao = '$Edicao'
                                            and livro_volume = '$Volume'";

$resultado = mysqli_query($conn->connection, $sql);

if ($resultado->num_rows > 0){
    echo  "<script>alert('Erro Livro repetido!');</script>";
}

else {
    $sql = "INSERT INTO `cadastro_livros` (`nome`, `autor`, `isbn`, `ano_public`, `editora`, `referencias`, `localizacao`,`livro_categoria`, `livro_edicao`,`livro_volume`, `qtd_disponivel`, `site_imagem`) 
    VALUES ('$Name', '$Autor', '$Isbn','$Ano_public','$Editora ','$Referencias','$Localizacao','$Categoria','$Edicao','$Volume','$Disponíveis', '$SiteImagem')";
mysqli_query($conn->connection, $sql);
}

mysqli_close($conn->connection);
header("Location:../_html/cadastro_livros.html");
?>

