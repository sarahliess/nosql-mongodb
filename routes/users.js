import express from "express";
//import controllers
import {
  getAllUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

//use express Router to create user routes
const users = express.Router();

//create route for CRUD operations at endpoint "users"
users.route("/").get(getAllUsers).post(createUser);

users.route("/:id").get(getSingleUser).delete(deleteUser).put(updateUser);

//export routes
export default users;
