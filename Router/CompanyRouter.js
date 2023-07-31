import express from "express";
import company from "../models/Companymodel.js";

const CompanyRouters = express.Router();

//reading data

CompanyRouters.get("/all", async (req, res) => {
  const sogali = await company.find();
  res.send(sogali);
});


//post

CompanyRouters.post("/add", async (req, res) => {
  const kudar = new company({
    companyname: req.body.companyname,
    email: req.body.email,
    phone: req.body.phone,
    faxnumber: req.body.faxnumber,
    adress: req.body.adress,
  });

  await kudar.save();
  res.send("saved success");
});

//Delete

CompanyRouters.delete("/:id", async (req, res) => {
  company.remove({ _id: req.params.id })
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

CompanyRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  company.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          companyname: req.body.companyname,
          email: req.body.email,
          phone: req.body.phone,
          faxnumber: req.body.faxnumber,
          adress: req.body.adress,
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

export default CompanyRouters;
