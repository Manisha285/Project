<?php
$users = file_exists("users.json") ? json_decode(file_get_contents("users.json"), true) : [];
$tickets = file_exists("tickets.json") ? json_decode(file_get_contents("tickets.json"), true) : [];

$pending = array_filter($tickets, fn($t) => strtolower($t["status"]) === "pending");

echo json_encode([
    "totalUsers" => count($users),
    "totalTickets" => count($tickets),
    "pendingTickets" => count($pending),
    "users" => $users,
    "tickets" => $tickets
]);
