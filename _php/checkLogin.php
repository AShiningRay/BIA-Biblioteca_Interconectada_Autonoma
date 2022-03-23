<?php

include ("./bd.php");
$conn = new Connection();

// Verifica se houve POST e se o usuário ou a senha são vazios
  if (!empty($_POST) AND (empty($_POST['username']) OR empty($_POST['password']))) {
      header("Location: ../ajuda.html"); exit;
  }

//Query para verificação de usuário e senha.
$user = $_POST['username'];
$password = hash('sha256', $_POST['password']);

$sql = "SELECT * FROM users where username = '$user' and pass = '$password'";

$resultado = mysqli_query($conn->connection, $sql);

//Se retornar ao menos um resultado, o login foi bem sucedido.
if ($resultado->num_rows != 1){
    header("Location: ../index.html"); exit;
}

else {
    $rowData = mysqli_fetch_array($resultado);

    // Se a sessão não existir, inicia uma
    if (!isset($_SESSION)) session_start();

    // Salva os dados encontrados na sessão
    $_SESSION['UsuarioID'] = $rowData['id'];
    $_SESSION['UsuarioNome'] = $rowData['name'];

    // Redireciona o visitante
    header("Location: ../_html/pesquisa.php"); exit;
}

?>