import express from "express";
import "dotenv/config";
import "./db/client.js";
import users from "./routes/users.js";

const app = express();
const port = process.env.PORT || 5000;

//built in middleware function in Express starting from v4.16.0. It parses incoming JSON requests and puts the parsed data in req.body. Without this, req.body would be undefined.
app.use(express.json());
app.use("/users", users);

app.get("/", (req, res) => {
  res.send("<h1>Connecting your MongoDB database with mongoose!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
