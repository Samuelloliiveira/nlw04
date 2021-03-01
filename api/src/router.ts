import { Router } from 'express';
import { AnswerController } from './contollers/AnswerController';
import { NpsController } from './contollers/NpsController';
import { SendMailController } from './contollers/SendMailController';
import { SurveysController } from "./contollers/SurveysController";
import { UserController } from "./contollers/UserController";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);
router.post("/sendMail", sendMailController.execute);
router.get("/answers/:value", answerController.execute);
router.get("/nps/:survey_id", npsController.execute);

export {router};