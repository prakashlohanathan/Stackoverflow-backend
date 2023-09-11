const express = require("express");
const APP_SERVER = express();

// REGISTER ALL THE CONTROLLER IN APP SERVER


APP_SERVER.use("/users", require("./Controllers/Users.controller"));
APP_SERVER.use("/auth", require("./Controllers/Auth.controller"));
APP_SERVER.use("/answers", require("./Controllers/Answers.controller"));
APP_SERVER.use("/questions", require("./Controllers/Questions.controller"));
APP_SERVER.use("/comments", require("./Controllers/Comments.controller"));

module.exports = APP_SERVER;

// INJECTING DATABSE CONNECTION

 require("./Database/dbConfig");