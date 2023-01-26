import { Request, Response } from "express";
import { Modules } from "@eliezeralves/chapolim-js";

export const create = async (req: Request, res: Response) => {
  try {
    const { basePath, name, withViews, withRoutes } = req.body;
    Modules.create(basePath, name, withRoutes, withViews);
    return res.json({ data: req.body });
  } catch (err: any) {
    return res.json({ error: err.message });
  }
};

export const list = async ({ body }: Request, res: Response) => {
  try {
    const data = Modules.list(body.basePath);
    return res.json(data);
  } catch (err: any) {
    return res.json({ error: err.message });
  }

};

export const show = async ({ body }: Request, res: Response) => {
  try {
    const data = Modules.show(body.basePath, body.name);
    return res.json(data);
  } catch (err: any) {
    return res.json({ error: err.message });
  }

};

export const diagram = async ({ body }: Request, res: Response) => {
  try {
    const data = Modules.showDiagram(body.basePath, body.name);
    return res.json({ data });
  } catch (err: any) {
    return res.json({ error: err.message });
  }

};
