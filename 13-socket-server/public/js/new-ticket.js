let socket = null;

const currentTicket = document.getElementById("lbl-new-ticket");
const createTicketBtn = document.querySelector("button");

async function getLastTickets() {
  const lasTicket = await fetch("/api/ticket/last").then((resp) => resp.json());
  currentTicket.innerText = lasTicket;
}

async function createTicket() {
  const newTicket = await fetch("/api/ticket", {
    method: "POST",
  }).then((resp) => resp.json());
  currentTicket.innerText = newTicket.number;
}

createTicketBtn.addEventListener("click", createTicket);

getLastTickets();
