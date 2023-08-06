import mongoose from "mongoose";

const NoteSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    person: { type: String, require: true },
    notedata: { type: String, require: true },
    createdby: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const note = mongoose.model("note", NoteSchema);
export default note;
