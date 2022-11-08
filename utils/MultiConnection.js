const mongoose = require("mongoose");

/* Lấy config mới chạy được  */
require(`dotenv`).config();
function newConnection(uri) {
  const connection = mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.on(`connected`, function () {
    console.log(`Mongodb::: connected::: ${this.name}`);
  });

  connection.on(`disconnected`, function () {
    console.log(`Mongodb::: connected::: ${this.name}`);
  });

  connection.on(`error`, function (error) {
    console.log(
      `Mongodb::: connected::: ${this.name} ${JSON.stringify(error)}`
    );
  });

  /* Dùng SIGINT để đóng connect */
  process.on('SIGINT',() => {
    connection.close();
    process.exit(0)
  })
  return connection;
}

/* URI lấy từ .env */
const URI_USER_MONGODB = process.env.URI_USER_MONGODB;
const URI_PRODUCT_MONGODB = process.env.URI_PRODUCT_MONGODB;

/* Tạo connection */
const userConnection = newConnection(URI_USER_MONGODB);
const productConnection = newConnection(URI_PRODUCT_MONGODB);

/* Export số lượng lớn connection */
module.exports = {
  userConnection,
  productConnection,
};
