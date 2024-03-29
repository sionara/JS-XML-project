const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || "3000";

//routers
const Router = require("./modules/routes");

// path for views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//set up static path (for use with CSS, client-side JS, and image files)
app.use(express.static(path.join(__dirname, "public")));

//SET UP FOR EASIER FORM DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/", Router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
