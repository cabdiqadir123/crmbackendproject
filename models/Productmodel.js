import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    productname: { type: String, require: true },
    image: { type: String, require: true },
    specification: { type: String, require: true },
    quantity: { type: String, require: true },
    amount: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("product", ProductSchema);
export default product;
