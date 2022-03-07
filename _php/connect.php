<?php
$hostName = "localhost";
$userName = "root";
$password = "123";
// Create connection
$conn = mysqli_connect($hostName, $userName, $password, "test");
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo 'Connected successfully';

$txtName = $_POST['nome_livro'];

echo "Var: ". $txtName;

$sql = "INSERT INTO `pesquisa` (`nome`) VALUES ('$txtName')";

mysqli_query($conn, $sql);

mysqli_close($conn);
?>