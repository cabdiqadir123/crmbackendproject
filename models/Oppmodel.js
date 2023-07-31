import mongoose from "mongoose";

const OppertunitySchema = mongoose.Schema(
  {
    dealname: { type: String, require: true },
    closingdate: { type: String, require: true },
    contact: { type: String, require: true },
    amount: { type: String, require: true },
    stage: { type: String, require: true },
    createdby: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const oppertunity = mongoose.model("oppertunity", OppertunitySchema);
export default oppertunity;
