import { Router, Request, Response } from "express";
import { get } from "http";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item";
import { LogMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getItems);
router.get("/:id",  LogMiddleware , getItem);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);



export { router };
