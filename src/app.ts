import express from "express";
import cors from "cors";

import modulesRouter from "./routes/modules";

const port = 8080;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("hello world");
});

app.use("/modules", modulesRouter);

app.listen(port, () => `server running on port ${port}`);
