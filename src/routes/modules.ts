import express from "express";
import { MODULES } from "../controllers";

const router = express.Router();

router.post("/register", MODULES.createModule);

export default router;
