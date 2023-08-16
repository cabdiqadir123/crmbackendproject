import express from "express";
import convert from "../models/Convertmodel.js";

const ConvertRouters = express.Router();

//reading data

ConvertRouters.get("/all", async (req, res) => {
  const sogali = await convert.find();
  res.send(sogali);
});


//post

ConvertRouters.post("/add", async (req, res) => {
  const kudar = new convert({
    name: req.body.name,
    date: req.body.date,
    leadowner: req.body.leadowner,
  });

  await kudar.save();
  res.send("saved success");
});

//Delete

ConvertRouters.delete("/:id", async (req, res) => {
  convert.remove({ _id: req.params.id })
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

ConvertRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  convert.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          date: req.body.date,
          leadowner: req.body.leadowner,
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

export default ConvertRouters;
