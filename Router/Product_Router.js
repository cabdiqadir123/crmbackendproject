import express from "express";
import product from "../models/productmodel.js";

const ProductRouters = express.Router();

//reading data

ProductRouters.get("/all", async (req, res) => {
  const sogali = await product.find();
  res.send(sogali);
});


//post

ProductRouters.post("/add", async (req, res) => {
  const kudar = new product({
    productname: req.body.productname,
    image: req.body.image,
    specification: req.body.specification,
    amount: req.body.amount,
    quantity: req.body.quantity,
  });

  await kudar.save();
  res.send("saved success");
});

//Delete

ProductRouters.delete("/:id", async (req, res) => {
  product.remove({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({
        message: "data deleted",
        reslt: result,
      });
    })
    .catch((err) => {
      req.status(404).json({
        Error: err,
      });
    });
});

//update

ProductRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  product.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          productname: req.body.productname,
          image: req.body.image,
          specification: req.body.specification,
          amount: req.body.amount,
          quantity: req.body.quantity,
        },
      }
    )
    .then((result) => {
      res.status(200).json({
        update: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        Error: err,
      });
    });
});

export default ProductRouters;