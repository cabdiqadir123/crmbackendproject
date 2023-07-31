import mongoose from "mongoose";

const MeetSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    location: { type: String, require: true },
    meatingday: { type: String, require: true },
    contact: { type: String, require: true },
    createdby: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const meet = mongoose.model("meet", MeetSchema);
export default meet;
