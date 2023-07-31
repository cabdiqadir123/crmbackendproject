import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
  {
    subject: { type: String, require: true },
    date: { type: String, require: true },
    status: { type: String, require: true },
    contact: { type: String, require: true },
    createdby: { type: String, require: false },
  }, 
  {
    timestamps: true,
  }
);

const task = mongoose.model("task", TaskSchema);
export default task;