import express from "express";

import { Create, ReadAll, ReadById, UpdateById, DeleteById } from "./controllers/quiz-controller";
import { CreateQuestion, UpdateQuestion, DeleteQuestion, GetQuestion } from "./controllers/question-controller";
import { CreateAnswer, UpdateAnswerById, GetAnswerById, DeleteAnswerById } from "./controllers/answer-controller";

const router: express.Router = express.Router();

router.post("/", Create);
router.get("/", ReadAll);
router.get("/:id", ReadById);
router.put("/:id", UpdateById)
router.delete("/:id", DeleteById);

router.post("/:quizId/question", CreateQuestion);
router.put("/:quizId/question/:questionId", UpdateQuestion);
router.delete("/:quizId/question/:questionId", DeleteQuestion);
router.get("/:quizId/question/:questionId", GetQuestion);

router.post("/:quizId/question/:questionId/answer", CreateAnswer);
router.put("/:quizId/question/:questionId/answer/:answerId", UpdateAnswerById);
router.get("/:quizId/question/:questionId/answer/:answerId", GetAnswerById);
router.delete("/:quizId/question/:questionId/answer/:answerId", DeleteAnswerById);

export default router;