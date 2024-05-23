const http = require("http");
const Server = http.createServer((req, res) => {
  //   if (req.url == "/users" && req.method == "GET") {
  //     res.end("All Users");
  // }

  //   --------------------POST------------------

  if (req.url == "/user" && req.method == "POST") {
    let body = "";

    req.on("data", (data) => {
      body += data;
      console.log(data);
    });
    res.end("want to create user");
  }
});
Server.listen(5600, () => {
  console.log("server is running");
});
