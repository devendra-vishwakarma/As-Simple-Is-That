import express from "express";
import { addUser,allUser,updateUser,deleteUser,getUser } from "../controller/user.controller.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/allUser",allUser);
route.put("/:id",updateUser);
route.delete("/:id",deleteUser);
route.get("/:id",getUser);

export default route;