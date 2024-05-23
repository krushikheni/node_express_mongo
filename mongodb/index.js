const express = require("express");
const mongoose = require("mongoose");
const server = express();
server.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/demo")
  .then(() => console.log("mongo is run"));

server.get("/", (req, res) => {
  res.send("hello");
});

//schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

//model

const userModal = mongoose.model("users", userSchema);

//curd

// ---------------post-------------
server.post("/user", (req, res) => {
  userModal.create(req.body);
  res.send("user created succesfully");
});

// -----------------get------------

server.get("/users", (req, res) => {
  userModal.find().then((data) => {
    res.send(data);
  });
});

// ----------------put ---------------

server.put("/user", (req, res) => {
  userModal
    .findByIdAndUpdate(req.body.id, res.body)
    .then((data) => {
      res.send("user updated succesfully");
    })
    .catch((err) => {
      console.error(err);
    });
});

server.delete("/user", (req, res) => {
  userModal.findByIdAndDelete(req.body.id).then((data) => {
    res.send("user deleted sucessfully");
  });
});
server.listen(5300, () => {
  console.log("server  is running");
});
