<?php
session_start();

if(isset($_SESSION["UsuarioNome"])){
    print $_SESSION['UsuarioNome'];
}
else{
    print "Usuário Não logado";
}
?>