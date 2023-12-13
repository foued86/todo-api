import { Request, Response } from "express";
import Todo from "../models/Todo";


// Get all todos
const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();

    res.status(200).json(todos);
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
};

// Get one todo
const getTodoById = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (todo) {
      return res.status(200).json(todo);
    }

    return res.status(404).json({ message: `Todo with id ${req.params.id} is not found!`});
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
};

// Create new todo
const createTodo = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const todo = await Todo.create(data);

    res.status(201).json(todo);
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
};

// Update todo
const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed } = req.body;
  let todo = await Todo.findById(id);

  if (!todo) {
    return res.status(404).json({ message: `Todo with id ${req.params.id} is not found!`});
  }

  if (!completed) {
    return res.status(400).json({ message: 'completed field is required!'})
  }

  try {
    todo.completed = completed;
    const updatedTodo = await todo.save();
    
    return res.status(200).json(updatedTodo);
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
};

// Delete todo
const deleteTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: `Todo with id ${req.params.id} is not found!`});
    }

    return res.status(204).json();
    
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
};

// Health check
const healthCheck = (req: Request, res: Response) => {
  res.status(200).json({ message: "APP is running successfully!" })
}

export { getTodos, getTodoById, createTodo, updateTodo, deleteTodo, healthCheck };