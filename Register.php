<?php
// Show errors for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set response type
header('Content-Type: application/json');

try {
    // Get JSON input
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate input
    if (!$data || !isset($data['name'], $data['email'], $data['role'], $data['password'])) {
        throw new Exception("Missing required fields.");
    }

    $name = trim($data["name"]);
    $email = trim($data["email"]);
    $role = trim($data["role"]);
    $password = trim($data["password"]);

    // Read users.json file
    $file = "users.json";
    $users = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

    // Check if email already exists
    foreach ($users as $user) {
        if (strtolower($user["email"]) === strtolower($email)) {
            http_response_code(409);
            echo json_encode(["error" => "Email already registered."]);
            exit;
        }
    }

    // Add new user
    $users[] = [
        "name" => $name,
        "email" => $email,
        "role" => $role,
        "password" => $password  // You can hash this using password_hash()
    ];

    // Save to file
    if (file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT)) === false) {
        throw new Exception("Failed to save user data.");
    }

    echo json_encode(["success" => true, "message" => "Registration successful"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
