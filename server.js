// Load necessary packages
const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
// create an express app
const app = express();
app.use(express.static(path.join(__dirname, "portfolio", "build")));

app.use(express.json());
app.use(cors());
dotenv.config();
// define PORT number to listen to the requests
const PORT = process.env.PORT || 5000;

// EMAILS

// to serve files from uploads directory
app.use("/uploads", express.static("uploads"));

// express routes
app.use("/", require("./routes"));

// const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "portfolio", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

console.log(process.env.NODE_ENV);
console.log(path.join(__dirname, "..", "portfolio", "build", "index.html"));
app.listen(PORT, () => console.log(`Server started running on PORT ${PORT}`));
