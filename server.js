const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const app = express();
const connectDb = require("./config/db");

dotenv.config({ path: "./config/config.env" });
connectDb();

const transactions = require("./routes/transaction");
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode 
on port No ${PORT}
`.red.bold
  )
);
