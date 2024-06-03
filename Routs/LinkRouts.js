import express from "express";
import LinksController from "../Controllers/LinksController.js";
import Link from "../Models/Link.js";

// import LinksController from "../Controllers/LinksController";
const LinksRouts = express.Router();

LinksRouts.get("/", LinksController.getList);
// LinksRouts.get("/:id", LinksController.getById);
// LinksRouts.post("/", LinksController.add);
// LinksRouts.put("/:id", LinksController.update);
// LinksRouts.delete("/:id", LinksController.delete);
LinksRouts.get("/:id",LinksController.redirect);
LinksRouts.get("/:id/click-segmentation", LinksController.clickSegmentation); // פונקציה חדשה לסגמנטציה של הקליקים


export default LinksRouts;
