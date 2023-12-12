import express, { Router } from "express";
import Todo from "../models/Todo";
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../controllers/todo.controller";

const router : Router = express.Router();


router.get('/', getTodos);
router.get('/:id', getTodoById);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
