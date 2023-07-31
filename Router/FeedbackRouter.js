import express from "express";
import order from "../models/Ordermodel.js";
import feedback from "../models/Feedbackmodel.js";

const FeedbackRouters = express.Router();

//reading data

FeedbackRouters.get("/all", async (req, res) => {
  const sogali = await feedback.find();
  res.send(sogali);
});


//post

FeedbackRouters.post("/add", async (req, res) => {
  const kudar = new feedback({
    productname: req.body.productname,
    customername: req.body.customername,
    feedback: req.body.feedback,
  });

  await kudar.save();
  res.send("saved success");
});

//Delete

FeedbackRouters.delete("/:id", async (req, res) => {
  feedback.remove({ _id: req.params.id })
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

FeedbackRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  feedback.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          productname: req.body.productname,
          customername: req.body.customername,
          feedback: req.body.feedback,
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

export default FeedbackRouters;
