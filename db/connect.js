const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://poesitor1:dbpgNRKWqxsaglTD@nodeprojects.uyv91.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority&appName=NodeProjects";

async function connectDB() {
  await mongoose.connect(connectionString);
}


module.exports = connectDB

