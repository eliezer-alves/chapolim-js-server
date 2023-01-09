import express from "express";
import { MODULES } from "../controllers";
import { createSchema } from "../request-validations/modules";
import validate from "../request-validations/validate";

const router = express.Router();

router.post("/register", validate(createSchema), MODULES.createModule);

export default router;
