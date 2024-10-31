<?php
require_once 'database.php';
require_once 'cors.php';

$sql = "SELECT * FROM product WHERE 1=1";

$filters = [];
$idproduct = $_GET['idproduct'] ?? '';
$category = $_GET['category'] ?? '';
$price = $_GET['price'] ?? '';
$size = $_GET['size'] ?? '';
$gender = $_GET['gender'] ?? '';
$image = $_GET['image'] ?? '';

// Add category filter
if (!empty($category)) {
    $filters[] = "category = '" . $conn->real_escape_string($category) . "'";
}

// Add price filter
if (!empty($price)) {
    $filters[] = "price <= " . floatval($price);
}

// Add gender filter
if (!empty($gender)) {
    $filters[] = "gender = '" . $conn->real_escape_string($gender) . "'";
}

// Append filters to the SQL query if any are set
if (!empty($filters)) {
    $sql .= " AND " . implode(" AND ", $filters);
}

// Sorting logic based on the filters
if (!empty($filters)) {
    if (in_array("category = '" . $conn->real_escape_string($category) . "'", $filters)) {
        $sql .= " ORDER BY category DESC";
    } elseif (in_array("gender = '" . $conn->real_escape_string($gender) . "'", $filters)) {
        $sql .= " ORDER BY gender DESC";
    } elseif (in_array("price <= " . floatval($price), $filters)) {
        $sql .= " ORDER BY price DESC";
    } else {
        $sql .= " ORDER BY category DESC"; // Default sorting
    }
} else {
    $sql .= " ORDER BY category DESC"; // Default sorting
}

$limit = isset($_GET['limit']) ? intval($_GET['limit']) : null;

if ($limit !== null) {
    $sql .= " LIMIT " . $limit;
}

$result = $conn->query($sql);

$products = [];
while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

$conn->close();

header("Content-Type: application/json");
echo json_encode($products);
