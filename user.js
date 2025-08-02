// Function to handle form submission
document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    // Get form data
    const subject = event.target[0].value;
    const category = event.target[1].value;
    const description = event.target[2].value;
    const attachment = event.target[3].files[0];

    // Create a ticket object
    const ticket = {
        subject: subject,
        category: category,
        description: description,
        attachment: attachment ? attachment.name : 'No attachment'
    };

    // Log the ticket to console (for now)
    console.log('New Ticket Created:', ticket);

    // You can implement code here to send the ticket data to your server

    // Clear the form after submission
    event.target.reset();
});

// Sample code to dynamically load user tickets (Placeholder)
function loadTickets() {
    const ticketList = document.querySelector('.ticket-list');
    const tickets = [
        { id: 1, subject: 'Issue with login', status: 'Open' },
        { id: 2, subject: 'Payment not processed', status: 'Resolved' }
    ];

    tickets.forEach(ticket => {
        const ticketItem = document.createElement('div');
        ticketItem.textContent = `${ticket.subject} - Status: ${ticket.status}`;
        ticketList.appendChild(ticketItem);
    });
}

// Load tickets on page load
document.addEventListener('DOMContentLoaded', loadTickets);
