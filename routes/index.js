const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/users", function (req, res) {
  User.find(function (err, users) {
    res.json(users);
  });
});

router.get("/users/:id", function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (!user) {
      res.status(404).send("No result found");
    } else {
      res.json(user);
    }
  });
});

router.post("/users", function (req, res) {
  let user = new User(req.body);
  user
    .save()
    .then((user) => {
      res.send(user);
    })
    .catch(function (err) {
      res.status(422).send("User add failed");
    });
});

router.patch("/users/:id", function (req, res) {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
      res.json("User updated");
    })
    .catch(function (err) {
      res.status(422).send("User update failed.");
    });
});

router.delete("/users/:id", function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (!user) {
      res.status(404).send("User not found");
    } else {
      User.findByIdAndRemove(req.params.id)
        .then(function () {
          res.status(200).json("User deleted");
        })
        .catch(function (err) {
          res.status(400).send("User delete failed.");
        });
    }
  });
});

module.exports = router;
