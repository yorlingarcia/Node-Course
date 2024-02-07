const lblPending = document.getElementById("lbl-pending");
const tituloEnCola = document.querySelector("#en-cola");
const noMoreAlert = document.querySelector(".alert");
const deskHeader = document.querySelector(".escritorio");

const btnDraw = document.querySelector("#btn-draw");
const btnDone = document.querySelector("#btn-done");

const lblCurrentTicket = document.querySelector("small");

const searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has("escritorio")) {
  window.location = "index.html";
  throw new Error("Escritorio es requerido");
}

const deskNumber = searchParams.get("escritorio");
deskHeader.innerText = deskNumber;

let workingTicket = null;

function checkTicketCount(currentCount = 0) {
  if (currentCount === 0) {
    noMoreAlert.classList.remove("d-none");
    lblPending.classList.add("d-none");
    tituloEnCola.classList.add("d-none");
  } else {
    noMoreAlert.classList.add("d-none");
    lblPending.classList.remove("d-none");
    tituloEnCola.classList.remove("d-none");
  }
  lblPending.innerText = currentCount;
}

async function loadInitialCount() {
  const pending = await fetch("/api/ticket/pending").then((resp) =>
    resp.json()
  );
  checkTicketCount(pending.length);
}

async function getTicket() {
  await finishTicket();
  const { status, ticket, message } = await fetch(
    `/api/ticket/draw/${deskNumber}`
  ).then((resp) => resp.json());
  if (status === "Error") {
    lblCurrentTicket.innerText = message;
    return;
  }

  workingTicket = ticket;
  lblCurrentTicket.innerText = ticket.number;
  loadInitialCount();
}

async function finishTicket() {
  if (!workingTicket) return;
  const { status, message } = await fetch(
    `/api/ticket/done/${workingTicket.id}`,
    {
      method: "PUT",
    }
  ).then((resp) => resp.json());

  if (status === "Ok") {
    workingTicket = null;
    lblCurrentTicket.innerText = "Nadie";
  }
}

function connectToWebSockets() {
  const socket = new WebSocket("ws://localhost:3000/ws");

  socket.onmessage = (event) => {
    const { type, payload } = JSON.parse(event.data);
    if (type !== "on-ticket-count-changed") return;
    lblPending.innerText = payload;
    checkTicketCount(payload);
  };

  socket.onclose = (event) => {
    console.log("Connection closed");
    setTimeout(() => {
      console.log("retrying to connect");
      connectToWebSockets();
    }, 1500);
  };

  socket.onopen = (event) => {
    console.log("Connected");
  };
}

btnDraw.addEventListener("click", getTicket);
btnDone.addEventListener("click", finishTicket);

connectToWebSockets();

loadInitialCount();
