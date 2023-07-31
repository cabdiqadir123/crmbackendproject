import express from "express";
import employee from "../models/Empmodel.js";

const EmpRouters = express.Router();

//reading data

EmpRouters.get("/all", async (req, res) => {
  const sogali = await employee.find();
  res.send(sogali);
});


//post

EmpRouters.post("/add", async (req, res) => {
  const kudar = new employee({
    fullname: req.body.fullname,
    gender: req.body.gender,
    email: req.body.email,
    phone: req.body.phone,
    adress: req.body.adress,
    role: req.body.role,
    company: req.body.company,
  });

  await kudar.save();
  res.send("saved success");
});

//Delete

EmpRouters.delete("/:id", async (req, res) => {
  employee.remove({ _id: req.params.id })
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

EmpRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  employee.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          fullname: req.body.fullname,
          gender: req.body.gender,
          email: req.body.email,
          phone: req.body.phone,
          adress: req.body.adress,
          role: req.body.role,
          company: req.body.company,
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

export default EmpRouters;
