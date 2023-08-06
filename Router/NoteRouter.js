import express from "express";
import note from "../models/Notemodel.js";

const NoteRouters = express.Router();

//reading data

NoteRouters.get("/all", async (req, res) => {
  const sogali = await note.find();
  res.send(sogali);
});


//post

NoteRouters.post("/add", async (req, res) => {
  const kudar = new note({
    title: req.body.title,
    person: req.body.person,
    notedata: req.body.notedata,
    createdby: req.body.createdby,
  });

  await kudar.save();
  res.send("saved success");
});

//Delete

NoteRouters.delete("/:id", async (req, res) => {
  note.remove({ _id: req.params.id })
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

NoteRouters.delete("/person/:id", async (req, res) => {
  note.remove({ person: req.params.id })
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

NoteRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  note.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
            title: req.body.title,
            person: req.body.person,
            notedata: req.body.notedata,
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

export default NoteRouters;
