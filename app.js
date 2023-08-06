const express = require("express");
const APP_SERVER = express();

// REGISTER ALL THE CONTROLLER IN APP SERVER

APP_SERVER.use("/bookings", require("./Controllers/Bookings.controller"));
APP_SERVER.use("/users", require("./Controllers/Users.controller"));
APP_SERVER.use("/mahal", require("./Controllers/Mahal.controller"));
module.exports = APP_SERVER;

// INJECTING DATABSE CONNECTION
 require("./Database/dbConfig");