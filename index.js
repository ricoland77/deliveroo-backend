const express = require("express");
const cors = require("cors");
const data = require("./data.json");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json(data);
});

// Heroku va nous fournir une variable process.env.PORT
// if (process.env.PORT) {
//   app.listen(process.env.PORT, () => {
//     console.log("Server started");
//   });
// } else {
//   app.listen(3200, () => {
//     console.log("Server started");
//   });
// }

app.listen(process.env.PORT || 3200, () => {
  console.log("Server started");
});
