<?php
$host = "localhost";
$dbname = "Wasiaya";
$username = "Alpha";
$password = "Alpha@01";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_errno) {
    die("Connection error: " . $conn->connect_error);
}

return $conn;