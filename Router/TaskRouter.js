import express from "express";
import task from "../models/Taskmodel.js";

const TaskRouters = express.Router();

//reading data

TaskRouters.get("/all", async (req, res) => {
  const sogali = await task.find();
  res.send(sogali);
});


//post

TaskRouters.post("/add", async (req, res) => {
  const kudar = new task({
    subject: req.body.subject,
    date: req.body.date,
    status: req.body.status,
    contact: req.body.contact,
    createdby: req.body.createdby,
  });
  await kudar.save();
  res.send("saved success");
});

//Delete

TaskRouters.delete("/:id", async (req, res) => {
  task.remove({ _id: req.params.id })
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

TaskRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  task.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          subject: req.body.subject,
          date: req.body.date,
          status: req.body.status,
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

export default TaskRouters;
