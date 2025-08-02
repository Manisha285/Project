<?php
$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid input"]);
    exit;
}

$email = $data["email"];
$password = $data["password"];

$users = file_exists("users.json") ? json_decode(file_get_contents("users.json"), true) : [];

foreach ($users as $user) {
    if ($user["email"] === $email && $user["password"] === $password) {
        echo json_encode(["success" => true, "role" => $user["role"], "name" => $user["name"]]);
        exit;
    }
}

http_response_code(401);
echo json_encode(["error" => "Invalid credentials"]);
