const http = require("http");
const connectDB = require("./src/db/connect");
const app = require("./src/app");


require("dotenv").config();
const server = http.createServer(app);

connectDB();

const port = process.env.PORT

server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
