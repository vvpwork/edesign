const morgan = require("morgan");
const path = require("path");
const body_parser = require("body-parser");
const cors = require("cors");

const { app, port, express } = require("./config");
const mailRoute = require("./src/routes/mailRoute");

// error route
const errorRoute = (req, res, next) => {
  res.status(500).send("No such page");
  next();
};

const stat = path.join(__dirname, "../build");
console.log(stat);
// server
const startServer = port => {
  app
    .use(cors())
    .use(body_parser.urlencoded({ extended: false }))
    .use(body_parser.json())
    .use(morgan("dev"))
    .use("/", express.static(stat))
    .use("/mail", mailRoute)
    .use(errorRoute);

  app.listen(process.env.port || port) &&
    console.log("serwer was started at port", port);
};

startServer(port);
