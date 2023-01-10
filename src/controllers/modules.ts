import { Request, Response } from "express";
import { Modules } from "@eliezeralves/chapolim-js";

export const create = async (req: Request, res: Response) => {
  return res.json({ data: req.body });
};

export const list = async ({ body }: Request, res: Response) => {
  const data = Modules.list(body.basePath);
  return res.json(data);
};

export const show = async ({ body }: Request, res: Response) => {
  const data = Modules.show(body.basePath, body.name);
  return res.json(data);
};

export const diagram = async ({ body }: Request, res: Response) => {
  const data = Modules.showDiagram(body.basePath, body.name);
  return res.json({ data });
};
