import Router from "express";
import MailController from "../dao/mongo/controllers/mail.controller.js";

const mailRouter = Router();

const mailController = new MailController();

mailRouter.post("/sendMail", mailController.sendMail);

export default mailRouter;