<?php
class Connection
{
    public $connection;
    public function __construct()
    {                   
        //                                   server    user    senha    BD      
        //                                     ↓         ↓       ↓      ↓
        $this->connection = mysqli_connect("localhost","root", "123", "test");
    }
}
?>