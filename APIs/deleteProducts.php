<?php
require_once 'cors.php';
require_once 'database.php';

if (isset($_GET['idproduct'])) {
    $idproduct = $_GET['idproduct'];

    // Create connection using mysqli
    $conn = new mysqli($host, $username, $password, $dbname);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // SQL query to delete the order
    $query = "DELETE FROM product WHERE idproduct = '$idproduct'";

    if ($conn->query($query) === TRUE) {
        echo json_encode(['message' => 'Order deleted successfully']);
    } else {
        echo json_encode(['error' => 'Failed to delete order']);
    }

    $conn->close();
} else {
    echo json_encode(['error' => 'OrderId is required']);
}
?>