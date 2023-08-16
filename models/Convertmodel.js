import mongoose from "mongoose";

const ConvertSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    date: { type: String, require: true },
    leadowner: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const convert = mongoose.model("convert", ConvertSchema);
export default convert;
