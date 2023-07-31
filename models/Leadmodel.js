import mongoose from "mongoose";

const LeadSchema = mongoose.Schema(
  {
    fullname: { type: String, require: true },
    identifiction: { type: String, require: true },
    phone: { type: String, require: true },
    email: { type: String, require: true },
    adress: { type: String, require: true },
    leadstatus: { type: String, require: true },
    company: { type: String, require: false },
  },
  {
    timestamps: true,
  }
);

const lead = mongoose.model("lead", LeadSchema);
export default lead;
