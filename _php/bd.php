<?php

class Connection
{
    public $connection;
    public function __construct()
    {
        $this->connection = mysqli_connect("localhost","root", "123", "test");
    }
}

?>