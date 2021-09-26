const express = require("express");
const isAuth = require("./middleware/auth");

const app = express();

const PORT = 7000;
app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/public/style.css");
});
app.use(isAuth);

//either write this piece of code to indicate that you are allowed access to the files in public folder
app.use(express.static("public"));

//or use this code for each file individually
// app.get("/", isAuth, (request, response) => {
//   response.sendFile(__dirname + "/public/index.html");
// });
// app.get("/services", isAuth, (request, response) => {
//   console.log(__dirname);
//   response.sendFile(__dirname + "/public/services.html");
// });
// app.get("/contact", isAuth, (request, response) => {
//   response.sendFile(__dirname + "/public/contact.html");
// });

app.listen(PORT, (err) => {
  err ? console.error(err) : console.log(`server is running on ${PORT}`);
});
