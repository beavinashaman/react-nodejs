const cors = require("cors");
const express = require("express");
// const rootDir = require("./util/path");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

const errorController = require("./controllers/pageNotFound");


const app = express();
app.set('view engine','ejs');
app.set('views', 'views');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.pageNotFound);

app.listen("8000", () => {
  console.log("server is up");
});
