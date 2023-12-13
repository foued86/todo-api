import express, { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  healthCheck,
  updateTodo,
} from "../controllers/todo.controller";

const router: Router = express.Router();

router.get("/", getTodos);
router.get("/health-check", healthCheck);
router.get("/:id", getTodoById);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
