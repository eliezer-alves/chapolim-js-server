import express from "express";
import { MODULES } from "../controllers";
import { createSchema, listSchema, sowSchema } from "../middlewares/modules";
import validate from "../resources/request-validate";

const router = express.Router();

router.post("/", validate(createSchema), MODULES.create);
router.get("/list", validate(listSchema), MODULES.list);
router.get("/show", validate(sowSchema), MODULES.show);
router.get("/diagram", validate(sowSchema), MODULES.diagram);

export default router;
