import { Router } from "express";
import { TicketController } from "./constroller";

export class TicketRoutes {
  static get routes() {
    const router = Router();

    const ticketController = new TicketController();

    router.get("/", ticketController.getTickets);
    router.get("/last", ticketController.getLastTicketNumber);
    router.get("/pending", ticketController.pendingTickets);

    router.post("/", ticketController.createTicket);

    router.get("/draw/:desk", ticketController.drawTicket);
    router.put("/done/:ticket", ticketController.ticketFinished);

    router.get("/working-on", ticketController.workingOn);

    return router;
  }
}
