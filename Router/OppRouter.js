import express from "express";
import oppertunity from "../models/Oppmodel.js";

const OppertunityRouters = express.Router();

//reading data

OppertunityRouters.get("/all", async (req, res) => {
  const sogali = await oppertunity.find();
  res.send(sogali);
});


//post

OppertunityRouters.post("/add", async (req, res) => {
  const kudar = new oppertunity({
    dealname: req.body.dealname,
    closingdate: req.body.closingdate,
    contact: req.body.contact,
    amount: req.body.amount,
    stage: req.body.stage,
    createdby: req.body.createdby,
  });

  await kudar.save();
  res.send("saved success");
});

//Delete

OppertunityRouters.delete("/:id", async (req, res) => {
  oppertunity.remove({ _id: req.params.id })
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

OppertunityRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  oppertunity.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          dealname: req.body.dealname,
          closingdate: req.body.closingdate,
          contact: req.body.contact,
          amount: req.body.amount,
          stage: req.body.stage,
          createdby: req.body.createdby,
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

export default OppertunityRouters;
