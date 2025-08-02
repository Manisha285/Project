// agent.js

// Sample ticket data (can be replaced with actual API/data later)
const tickets = [
  {
    id: 1,
    title: "Email not working",
    status: "Open",
    user: "John Doe",
    priority: "High",
    createdAt: "2025-07-30"
  },
  {
    id: 2,
    title: "Payment issue",
    status: "In Progress",
    user: "Jane Smith",
    priority: "Medium",
    createdAt: "2025-07-28"
  },
  {
    id: 3,
    title: "Unable to login",
    status: "Closed",
    user: "Mike Lee",
    priority: "Low",
    createdAt: "2025-07-25"
  }
];

// Load tickets to the DOM
function loadTickets(filter = "all") {
  const container = document.getElementById("ticketList");
  container.innerHTML = "";

  const filtered = filter === "my"
    ? tickets.filter(ticket => ticket.user === "John Doe") // Replace with actual agent check
    : tickets;

  if (filtered.length === 0) {
    container.innerHTML = "<p>No tickets found.</p>";
    return;
  }

  filtered.forEach(ticket => {
    const card = document.createElement("div");
    card.classList.add("ticket-card");
    card.innerHTML = `
      <h3>${ticket.title}</h3>
      <p><strong>User:</strong> ${ticket.user}</p>
      <p><strong>Status:</strong> ${ticket.status}</p>
      <p><strong>Priority:</strong> ${ticket.priority}</p>
      <p><strong>Created:</strong> ${ticket.createdAt}</p>
    `;
    container.appendChild(card);
  });
}

// Filter button handlers
function filterTickets(type) {
  loadTickets(type);
}

// Placeholder for ticket creation
function createNewTicket() {
  alert("Redirecting to create ticket page or modal...");
}

// Load all tickets on page load
window.addEventListener("DOMContentLoaded", () => {
  loadTickets("all");
});