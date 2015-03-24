<?php
session_start();

$host = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "theminer_session_proj";

$dbconn = new MySQLi($host, $username, $password, $dbname);

if($dbconn->connect_error){
	die("Connection Failed: ". $dbconn->connect_error);
}

//echo "Connected";