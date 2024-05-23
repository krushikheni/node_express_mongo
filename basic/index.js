// console.log("hello");

// ---------------------- write file ------------------

// const paragraf =
//   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)";

// ====== ascyncfile====
// const fs = require("fs");
// fs.writeFile("first.txt", paragraf, () => {
//   console.log("file created.....");
// });
// console.log("xyz.......");

// ====== syncfile=====
// const fs = require("fs");
// const data = fs.writeFileSync("first.txt", paragraf);
// console.log(data);
// console.log("xyz.......");

// const fs = require("fs");
// const wri = fs.writeFileSync("first.txt", paragraf);
// console.log(wri, "write");
// console.log("xyz.......");

// ------------------- read file ---------------------

// ======ansyncfile======
// const fs = require("fs");
// fs.readFile("first.txt", "utf8", (err, data) => {
//   console.log(data);
// });
// console.log("xyz......");

// =====syncfile=======
// const fs = require("fs");

// const data = fs.readFileSync("./first.txt", "utf8");

// console.log(data);
// console.log("reading file.....");

// -------------- update file -------------------

// const fs = require("fs");

// const data = fs.readFileSync("./second.txt", "utf8");
// console.log(data);

// fs.writeFileSync("./second.txt", data + "\n" + "again combind......", () => {
//   console.log("writed.....");
// });

// ------------------- delete file ----------------

// const fs = require("fs");
// fs.unlink("./first.txt", () => {
//   console.log("deletd...");
// });
