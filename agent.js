const tickets = [
  { id: 1, title: "Login issue", assigned: true },
  { id: 2, title: "Bug in dashboard", assigned: false },
  { id: 3, title: "Reset password request", assigned: true },
];

function loadTickets(filter = "my") {
  const container = document.getElementById("ticket-list");
  container.innerHTML = "";

  const filtered = tickets.filter(ticket =>
    filter === "all" ? true : ticket.assigned
  );

  filtered.forEach(ticket => {
    const div = document.createElement("div");
    div.className = "ticket";
    div.innerHTML = `
      <h3>${ticket.title}</h3>
      <p>Status: ${ticket.assigned ? "Assigned to You" : "Unassigned"}</p>
      <div class="actions">
        <button onclick="reply(${ticket.id})">Reply</button>
        <button onclick="share(${ticket.id})">Share</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function filterTickets(type) {
  loadTickets(type);
}

function reply(id) {
  alert("Reply to ticket #" + id);
}

function share(id) {
  alert("Share ticket #" + id);
}

window.onload = () => loadTickets("my");