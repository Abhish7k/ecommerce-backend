const express = require("express");

const { PORT } = require("./config/serverConfig.js");

const app = express();

app.listen(PORT, () => {
  console.log("server for shopkart is up");
});
