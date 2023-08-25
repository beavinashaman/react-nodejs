const cors = require("cors");
const express = require("express");
const rootDir = require("./util/path");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).send("<h1>Page Not Found!</h1>");
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen("8000", () => {
  console.log("server is up");
});
