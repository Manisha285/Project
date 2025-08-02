// admin.js

async function loadDashboardData() {
  const res = await fetch("dashboard-data.php");
  const data = await res.json();

  document.getElementById("totalUsers").textContent = data.totalUsers;
  document.getElementById("totalTickets").textContent = data.totalTickets;
  document.getElementById("pendingTickets").textContent = data.pendingTickets;

  loadUsers(data.users);
  loadTickets(data.tickets);
}

function loadUsers(users) {
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

function loadTickets(tickets) {
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

window.addEventListener("DOMContentLoaded", () => {
  loadDashboardData();
});
