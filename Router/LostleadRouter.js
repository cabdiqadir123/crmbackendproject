import express from "express";
import lostlead from "../models/Lostleadmodel.js";

const LostleadRouters = express.Router();

//reading data

LostleadRouters.get("/all", async (req, res) => {
  const sogali = await lostlead.find();
  res.send(sogali);
});


//post

LostleadRouters.post("/add", async (req, res) => {
  const kudar = new lostlead({
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

LostleadRouters.delete("/:id", async (req, res) => {
  lostlead.remove({ _id: req.params.id })
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

LostleadRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  lostlead.findByIdAndUpdate(
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

export default LostleadRouters;
