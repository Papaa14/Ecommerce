<?php
require_once 'cors.php';
require_once 'database.php';


// Create connection using mysqli
$conn = new mysqli($host, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to get all users
$query = "SELECT *  FROM product";

$result = $conn->query($query);

// Check if the query was successful
if ($result && $result->num_rows > 0) {
    // Fetch the result
    $products = array();
    while($row = $result->fetch_assoc()) {
        $products[] = $row;
    }

    // Return the result as a JSON object
    header('Content-Type: application/json');
    $data = array('products'=> $products);
    echo json_encode($data);
} else {
    // Return an error response if the query failed
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Failed to retrieve users']);
}

// Close the connection
$conn->close();

