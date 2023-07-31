import mongoose from "mongoose";

const ContactSchema = mongoose.Schema(
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

const contact = mongoose.model("contact", ContactSchema);
export default contact;
