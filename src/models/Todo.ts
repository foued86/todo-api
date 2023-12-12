import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
  text: string;
  completed: boolean;
}

const TodoSChema: Schema = new Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<ITodo>('Todo', TodoSChema);