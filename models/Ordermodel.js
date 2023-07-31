import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    productname: { type: String, require: true },
    image: { type: String, require: true },
    customername: { type: String, require: true },
    number: { type: String, require: true },
    quantity: { type: String, require: true },
    amount: { type: String, require: true },
    orderstatus: { type: String, require: true },
    deliver: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const order = mongoose.model("order", OrderSchema);
export default order;
