import express from "express";
import User from "../models/Usermodel.js";
import {getUserprofile, login, register } from "../Controler.js";

const UserRouters = express.Router();

//reading data
UserRouters.get("/all", async (req, res) => {
  const sogali = await User.find();
  res.send(sogali);
});

UserRouters.route('/login').post(login);
UserRouters.route('/add').post(register);
UserRouters.route('/profile').post(getUserprofile);

//post

//Delete

UserRouters.delete("/:id", async (req, res) => {
  User.remove({ _id: req.params.id })
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

UserRouters.put("/:id", async (req, res) => {
  console.log(req.params.id);
  User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          username: req.body.fullname,
          email: req.body.email,
          password: req.body.password,
          number: req.body.number,
          address: req.body.address,
          role: req.body.role,
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

export default UserRouters;


