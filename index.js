const express = require("express");
const server = express();
const dbConfig = require("./config/db.config.js");
const mongoose = require("mongoose");
const db = {};
db.mongoose = mongoose;
const admin = require("./routes/admin.routes");
//server

server.listen(3000, () => {
  console.log("Server Running");
});
  //Routes
server.use("/admin", admin);

db.url = dbConfig.url;
db.admintabs = require("./models/admin.model.js")(mongoose);
db.partytabs = require("./models/partyinfo.model.js")(mongoose);
db.consttabs = require("./models/consti.model.js")(mongoose);
db.contesttabs = require("./models/contestant.model.js")(mongoose);
db.electiontabs = require("./models/election.model.js")(mongoose);
db.newusertabs = require("./models/newuser.model.js")(mongoose);
db.officetabs = require("./models/officer.model.js")(mongoose);
module.exports = db;
