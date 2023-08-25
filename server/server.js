const cors = require("cors");
const express = require("express");
const bodyParser = require('body-parser');
const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not Found!</h1>");
})

app.listen("8000", () => {
  console.log("server is up");
});
