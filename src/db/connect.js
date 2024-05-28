const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to Database", error);
  }
};


module.exports = connectDB