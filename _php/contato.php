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
$Name = trim($_POST['name']);
$Email = trim($_POST['e-mail']);
$Telefone = trim($_POST['phone']);
$Mensagem = trim($_POST['text_message']);

$sql = "INSERT INTO `mensagens_contato` (`name`, `email`, `telefone`, `mensagem`) 
    VALUES ('$Name', '$Email', '$Telefone','$Mensagem')";

mysqli_query($conn->connection, $sql);


//Fecha a conexão com o bd.
mysqli_close($conn->connection);

//Retorna a página de cadastro.
header("Location:../_html/contato.html");
?>