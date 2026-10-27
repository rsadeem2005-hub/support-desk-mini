import { useState } from "react";
import "./styles.css";

const ticketsData = [
  {
    id: "SD-001",
    customer: "Aisha Rahman",
    subject: "Unable to access my account",
    category: "Account",
    priority: "High",
    status: "Open",
  },
  {
    id: "SD-002",
    customer: "Daniel Lee",
    subject: "Payment was charged twice",
    category: "Billing",
    priority: "High",
    status: "Pending",
  },
  {
    id: "SD-003",
    customer: "Maya Thomas",
    subject: "How do I reset my password?",
    category: "Account",
    priority: "Medium",
    status: "Resolved",
  },
  {
    id: "SD-004",
    customer: "Noah Wilson",
    subject: "Feature request",
    category: "Product",
    priority: "Low",
    status: "Open",
  },
];

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [filter, setFilter] = useState("All");

  const filteredTickets =
    filter === "All"
      ? tickets
      : tickets.filter((ticket) => ticket.status === filter);

  const updateStatus = (id, status) => {
    setTickets((current) =>
      current.map((ticket) =>
        ticket.id === id ? { ...ticket, status } : ticket
      )
    );
  };

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <span className="eyebrow">SUPPORT OPERATIONS</span>
          <h1>Support Desk</h1>
        </div>

        <button className="new-ticket">+ New Ticket</button>
      </header>

      <main>
        <section className="stats">
          <div className="stat-card">
            <span>Total Tickets</span>
            <strong>{tickets.length}</strong>
          </div>

          <div className="stat-card">
            <span>Open</span>
            <strong>
              {tickets.filter((ticket) => ticket.status === "Open").length}
            </strong>
          </div>

          <div className="stat-card">
            <span>Pending</span>
            <strong>
              {tickets.filter((ticket) => ticket.status === "Pending").length}
            </strong>
          </div>

          <div className="stat-card">
            <span>Resolved</span>
            <strong>
              {tickets.filter((ticket) => ticket.status === "Resolved").length}
            </strong>
          </div>
        </section>

        <section className="desk">
          <div className="section-heading">
            <div>
              <span className="eyebrow">TICKET QUEUE</span>
              <h2>Customer requests</h2>
            </div>

            <div className="filters">
              {["All", "Open", "Pending", "Resolved"].map((item) => (
                <button
                  key={item}
                  className={filter === item ? "active" : ""}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="ticket-list">
            {filteredTickets.map((ticket) => (
              <article className="ticket" key={ticket.id}>
                <div className="ticket-main">
                  <div className="ticket-id">{ticket.id}</div>

                  <div>
                    <h3>{ticket.subject}</h3>
                    <p>
                      {ticket.customer} · {ticket.category}
                    </p>
                  </div>
                </div>

                <div className="ticket-meta">
                  <span className={`priority ${ticket.priority.toLowerCase()}`}>
                    {ticket.priority}
                  </span>

                  <select
                    value={ticket.status}
                    onChange={(e) =>
                      updateStatus(ticket.id, e.target.value)
                    }
                  >
                    <option>Open</option>
                    <option>Pending</option>
                    <option>Resolved</option>
                  </select>
                </div>
              </article>
            ))}

            {filteredTickets.length === 0 && (
              <div className="empty">
                <h3>No tickets found</h3>
                <p>There are no tickets in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer>
        <span>Support Desk Mini</span>
        <span>Built by Ruqaiya Sadeem</span>
      </footer>
    </div>
  );
}

export default App;
