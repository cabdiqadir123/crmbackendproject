import express from "express";
import meet from "../models/Meetmodel.js";

const MeetRouters = express.Router();

//reading data

MeetRouters.get("/all", async (req, res) => {
  const sogali = await meet.find();
  res.send(sogali);
});


//post

MeetRouters.post("/add", async (req, res) => {
  const kudar = new meet({
    title: req.body.title,
    location: req.body.location,
    meatingday: req.body.meatingday,
    contact: req.body.contact,
    createdby: req.body.createdby,
  });

  await kudar.save();
  res.send("saved success");
});

//Delete

MeetRouters.delete("/:id", async (req, res) => {
  meet.remove({ _id: req.params.id })
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

MeetRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  meet.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          location: req.body.location,
          meatingday: req.body.meatingday,
          contact: req.body.contact,
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

export default MeetRouters;
