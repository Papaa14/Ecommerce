<?php
require_once 'database.php';
require_once 'cors.php';

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $category = $_POST["category"];
    $gender = $_POST["gender"];
    $size = (int)$_POST["size"]; // Cast to int
    $price = (int)$_POST["price"]; // Cast to int
    $image = $_FILES["image"]['name'];
    $target_Folder = "uploads/";

    // Validate file type
    $allowed = array('jpg', 'jpeg', 'png');
    $file_ext = pathinfo($image, PATHINFO_EXTENSION);
    if (!in_array($file_ext, $allowed)) {
        echo json_encode(["error" => "Error: Only JPG, JPEG, and PNG files are allowed."]);
        exit();
    }

    // Ensure unique file name
    $newFileName = time() . "_" . basename($image);
    $target_Path = $target_Folder . $newFileName;

    if (file_exists($target_Path)) {
        echo json_encode(["error" => "That file already exists."]);
        exit();
    } else {
        // Prepare statement to prevent SQL injection
        $stmt = $conn->prepare("INSERT INTO product (category, gender, size, price, image) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("ssiis", $category, $gender, $size, $price, $newFileName);

        if ($stmt->execute()) {
            // Move the uploaded file to the specified folder
            if (move_uploaded_file($_FILES['image']['tmp_name'], $target_Path)) {
                echo json_encode(["message" => "1 record added successfully in the database.", "path" => $target_Path]);
            } else {
                echo json_encode(["error" => "Error uploading the file."]);
            }
        } else {
            echo json_encode(["error" => "Error: " . $stmt->error]);
        }

        // Close statement
        $stmt->close();
    }
} else {
    echo json_encode(["error" => "Failed to submit form"]);
}

// Close database connection
$conn->close();
