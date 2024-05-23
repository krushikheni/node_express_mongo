const express = require("express");
const server = express();

// ------------- data response -----------

// server.get("/", (req, res) => {
//   res.send("hello express");
// });

// ----------post(noraml)--------

// const fs = require("fs");
// server.use(express.json());

// server.post("/user", (req, res) => {
//   res.send(" user create sucessfully");
//   console.log(req.body);
//   fs.writeFileSync("users.json", JSON.stringify([req.body]));
// });

// -------------------post(old/new)----------------
const fs = require("fs");
server.use(express.json());

server.post("/user", (req, res) => {
  const oldData = fs.readFileSync("users.json", "utf8");
  //   console.log(oldData);
  let bodyData = req.body;
  bodyData.id = Date.now();
  if (oldData) {
    const convertData = JSON.parse(oldData);
    //   console.log(convertData);

    convertData.push(bodyData);
    //   console.log(convertData);
    fs.writeFileSync("users.json", JSON.stringify([convertData]));
  } else {
    fs.writeFileSync("users.json", JSON.stringify([bodyData]));
  }

  res.send("user created successfuly");
});

// ----------------------get---------------------
server.get("/users", (req, res) => {
  const data = fs.readFileSync("users.json", "utf8");
  res.send(data);
});

//   -------------------------put -------------------

server.put("/user", (req, res) => {
  const oldData = fs.readFileSync("users.JSON", "utf8");

  const convetData = JSON.parse(oldData);

  for (let i = 0; i < convetData.length; i++) {
    if (convetData[i].id == req.body.id) {
      convetData[i] = req.body;
    }
  }
  fs.writeFileSync("users.json", JSON.stringify(convetData));
  res.send("user updated successfully");
});

server.listen(5400, () => {
  console.log("server running");
});

// -------------------------- delete -----------------------

server.delete("/user", (req, res) => {
  const oldData = fs.readFileSync("users.JSON", "utf8");
  //   console.log(oldData);

  const convetData = JSON.parse(oldData);
  console.log(convetData);

  let findIndex = -1;

  for (let i = 0; i < convetData.length; i++) {
    if (convetData[i].id == req.body.id) {
      findIndex = i;
    }
  }

  if (findIndex !== -1) {
    convetData.splice(findIndex, 1);
  } else {
    res.send("user not found");
  }
  fs.writeFileSync("users.json", JSON.stringify(convetData));
  res.send("user deleted succesfulluy");
});
