<?php

include ("./bd.php");
$conn = new Connection();

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo 'Connected successfully';

$txtName = $_POST['nome_livro'];

echo "Var: ". $txtName;

$sql = "INSERT INTO `pesquisa` (`nome`) VALUES ('$txtName')";


mysqli_query($conn->connection, $sql);

//mysqli_close($conn->connection);


?>

