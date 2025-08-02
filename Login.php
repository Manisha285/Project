<?php
// Show errors (for development only)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set JSON response type
header("Content-Type: application/json");

// Read and decode input
$data = json_decode(file_get_contents("php://input"), true);
if (!$data || !isset($data['email'], $data['password'])) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid input"]);
    exit;
}

$email = trim($data["email"]);
$password = trim($data["password"]);

// Load users
$users = file_exists("users.json") ? json_decode(file_get_contents("users.json"), true) : [];

foreach ($users as $user) {
    if (strtolower($user["email"]) === strtolower($email) && $user["password"] === $password) {
        // Match found — respond with role-based info
        echo json_encode([
            "success" => true,
            "name" => $user["name"],
            "role" => strtolower($user["role"]) // ensure lowercase for consistency
        ]);
        exit;
    }
}

http_response_code(401);
echo json_encode(["error" => "Invalid email or password"]);
