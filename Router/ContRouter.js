import express from "express";
import contact from "../models/Contmodel.js";

const ContactRouters = express.Router();

//reading data

ContactRouters.get("/all", async (req, res) => {
  const sogali = await contact.find();
  res.send(sogali);
});


//post

ContactRouters.post("/add", async (req, res) => {
  const kudar = new contact({
    fullname: req.body.fullname,
    identifiction: req.body.identifiction,
    phone: req.body.phone,
    email: req.body.email,
    adress: req.body.adress,
  });

  await kudar.save();
  res.send("saved success");
});

//Delete

ContactRouters.delete("/:id", async (req, res) => {
  contact.remove({ _id: req.params.id })
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

ContactRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  contact.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          fullname: req.body.fullname,
          identifiction: req.body.identifiction,
          phone: req.body.phone,
          email: req.body.email,
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

export default ContactRouters;
