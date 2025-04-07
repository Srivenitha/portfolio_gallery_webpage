<?php
$email = $_POST['email'];
$password = $_POST['password'];

// Replace 'your_database_name' with your actual database name
$conn = new mysqli('localhost','root','','project');

if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO data (email, password) VALUES (?, ?)");
    
    // Use 'ss' for two string parameters
    $stmt->bind_param("ss", $email, $password);

    $stmt->execute();
    echo "Registration success";
    
    $stmt->close();
    $conn->close();
}
?>
