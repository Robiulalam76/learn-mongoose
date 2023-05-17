import { createUser, getUsers } from "./userController";

const express = require("express");
const router = express.Router()


router.post("/", createUser)
router.get("/", getUsers)


export default router;