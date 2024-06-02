import express from "express";
// import LinksController from "../Controllers/LinksController";
const LinksRouts = express.Router();

LinksRouts.get("/", LinksController.getList);
LinksRouts.get("/:id", LinksController.getById);
// LinksRouts.post("/", LinksController.add);
// LinksRouts.put("/:id", LinksController.update);
// LinksRouts.delete("/:id", LinksController.delete);

export default LinksRouts;
