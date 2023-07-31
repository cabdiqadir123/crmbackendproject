import express from "express";
import order from "../models/Ordermodel.js";

const OrderRouters = express.Router();

//reading data

OrderRouters.get("/all", async (req, res) => {
  const sogali = await order.find();
  res.send(sogali);
});


//post

OrderRouters.post("/add", async (req, res) => {
  const kudar = new order({
    productname: req.body.productname,
    image: req.body.image,
    customername: req.body.customername,
    number: req.body.number,
    amount: req.body.amount,
    quantity: req.body.quantity,
    orderstatus: req.body.orderstatus,
    deliver: req.body.deliver,
  });

  await kudar.save();
  res.send("saved success");
});

//Delete

OrderRouters.delete("/:id", async (req, res) => {
  order.remove({ _id: req.params.id })
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

OrderRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  order.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          productname: req.body.productname,
          image: req.body.image,
          customername: req.body.customername,
          number: req.body.number,
          amount: req.body.amount,
          quantity: req.body.quantity,
          orderstatus: req.body.orderstatus,
          deliver: req.body.deliver,
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

export default OrderRouters;
