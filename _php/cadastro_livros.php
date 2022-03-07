<?php

include ("./bd.php");
$conn = new Connection();

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo 'Connected successfully';

$Name = $_POST['nome_livro'];
$Autor = $_POST['autor_livro'];
$Isbn = $_POST['num_isbn'];
$Ano_public = $_POST['data_pub'];
$Editora = $_POST['nome_editora'];
$Referencias = $_POST['referencias'];
$Localizacao = $_POST['localizacao'];


$sql = "INSERT INTO `cadastro_livros` (`nome`, `autor`, `isbn`, `ano_public`, `editora`, `referencias`, `localizacao`) 
        VALUES ('$Name', '$Autor', '$Isbn','$Ano_public','$Editora ','$Referencias','$Localizacao')";


mysqli_query($conn->connection, $sql);

//mysqli_close($conn->connection);


?>

