const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const mongoose = require("mongoose");
// Connecting to database
const MONGO_USER = "ankur_028";
const MONGO_PASS = "ankurpurohit@28";
const MONGO_CLUSTER = "cluster0.v6df8xl.mongodb.net";
const MONGO_URI = `mongodb+srv://${encodeURIComponent(MONGO_USER)}:${encodeURIComponent(MONGO_PASS)}@${MONGO_CLUSTER}/noted-app-main`;
mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("Connected to the database!");
});

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const NoteRouter = require("./routes/note-router");
const UserRouter = require("./routes/user-router");

app.use("/", NoteRouter);
app.use("/user", UserRouter);

// Listening to port
app.listen(port, () => {
  console.log("Server is running at", port);
});
