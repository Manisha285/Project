// admin.js

// Sample data – Replace with real DB/API data
const users = [
  { name: "John Doe", email: "john@example.com", role: "User" },
  { name: "Jane Smith", email: "jane@example.com", role: "Support Agent" },
  { name: "Admin User", email: "admin@quickdesk.com", role: "Admin" }
];

const tickets = [
  { title: "Login Issue", status: "Pending", user: "John Doe", date: "2025-07-28" },
  { title: "Email not syncing", status: "Resolved", user: "Jane Smith", date: "2025-07-27" },
  { title: "App crash on submit", status: "Pending", user: "John Doe", date: "2025-07-25" }
];

// Render user list
function loadUsers() {
  const container = document.getElementById("userList");
  container.innerHTML = "";

  users.forEach(user => {
    const card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
      <h4>${user.name}</h4>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Role:</strong> ${user.role}</p>
    `;
    container.appendChild(card);
  });
}

// Render ticket list
function loadTickets() {
  const container = document.getElementById("ticketList");
  container.innerHTML = "";

  tickets.forEach(ticket => {
    const card = document.createElement("div");
    card.className = "ticket-card";
    card.innerHTML = `
      <h4>${ticket.title}</h4>
      <p><strong>User:</strong> ${ticket.user}</p>
      <p><strong>Status:</strong> ${ticket.status}</p>
      <p><strong>Date:</strong> ${ticket.date}</p>
    `;
    container.appendChild(card);
  });
}

// Dashboard stats
function updateDashboard() {
  document.getElementById("totalUsers").textContent = users.length;
  document.getElementById("totalTickets").textContent = tickets.length;

  const pending = tickets.filter(t => t.status.toLowerCase() === "pending").length;
  document.getElementById("pendingTickets").textContent = pending;
}

// Initialize page
window.addEventListener("DOMContentLoaded", () => {
  loadUsers();
  loadTickets();
  updateDashboard();
});