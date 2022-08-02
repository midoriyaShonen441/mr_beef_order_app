const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT | 8888, () => {
  console.log("server run on port 8888");
});
