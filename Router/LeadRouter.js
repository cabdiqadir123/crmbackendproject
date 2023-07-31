import express from "express";
import lead from "../models/Leadmodel.js";

const LeadRouters = express.Router();

//reading data

LeadRouters.get("/all", async (req, res) => {
  const sogali = await lead.find();
  res.send(sogali);
});


//post

LeadRouters.post("/add", async (req, res) => {
  const kudar = new lead({
    fullname: req.body.fullname,
    identifiction: req.body.identifiction,
    phone: req.body.phone,
    email: req.body.email,
    adress: req.body.adress,
    leadstatus: req.body.leadstatus,
  });

  await kudar.save();
  res.send("saved success");
});

//Delete

LeadRouters.delete("/:id", async (req, res) => {
  lead.remove({ _id: req.params.id })
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

LeadRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  lead.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          fullname: req.body.fullname,
          identifiction: req.body.identifiction,
          phone: req.body.phone,
          email: req.body.email,
          adress: req.body.adress,
          leadstatus: req.body.leadstatus,
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

export default LeadRouters;
