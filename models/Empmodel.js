import mongoose from "mongoose";

const EmpSchema = mongoose.Schema(
  {
    fullname: { type: String, require: true },
    gender: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    adress: { type: String, require: true },
    role: { type: String, require: true },
    company: { type: String, require: false },
  },
  {
    timestamps: true,
  }
);

const employee = mongoose.model("employee", EmpSchema);
export default employee;
