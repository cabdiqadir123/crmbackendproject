import mongoose from "mongoose";

const PaySchema = mongoose.Schema(
  {
    productname: { type: String, require: true },
    orderid: { type: String, require: true },
    customername: { type: String, require: true },
    number: { type: String, require: true },
    quantity: { type: String, require: true },
    amount: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const payment = mongoose.model("payment", PaySchema);
export default payment;
