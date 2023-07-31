import mongoose from "mongoose";

const CompanySchema = mongoose.Schema(
  {
    companyname: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    faxnumber: { type: String, require: true },
    adress: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const company = mongoose.model("company", CompanySchema);
export default company;
