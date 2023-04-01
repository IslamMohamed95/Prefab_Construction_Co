const app = require("./src/app");
require("dotenv").config();

PORT = process.env.SERVER_PORT;
TZ = "Asia/Dubai";

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
