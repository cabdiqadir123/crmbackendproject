import mongoose from "mongoose";

const FeedbackSchema = mongoose.Schema(
  {
    productname: { type: String, require: true },
    customername: { type: String, require: true },
    feedback: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const feedback = mongoose.model("feedback", FeedbackSchema);
export default feedback;
