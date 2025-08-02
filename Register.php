<?php
$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid input"]);
    exit;
}

$name = $data["name"];
$email = $data["email"];
$role = $data["role"];
$password = $data["password"];

$users = file_exists("users.json") ? json_decode(file_get_contents("users.json"), true) : [];

foreach ($users as $user) {
    if ($user["email"] === $email) {
        http_response_code(409);
        echo json_encode(["error" => "Email already exists"]);
        exit;
    }
}

$users[] = ["name" => $name, "email" => $email, "role" => $role, "password" => $password];
file_put_contents("users.json", json_encode($users, JSON_PRETTY_PRINT));

echo json_encode(["success" => true, "message" => "Registration successful"]);
