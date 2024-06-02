import express from "express";
import UsersController from "../Controllers/UsersController.js";
const UsersRouts = express.Router();

UsersRouts.get("/", UsersController.getList);
UsersRouts.get("/:id", UsersController.getById);
UsersRouts.post("/", UsersController.add);
UsersRouts.put("/:id", UsersController.update);
UsersRouts.delete("/:id", UsersController.delete);

export default UsersRouts;
