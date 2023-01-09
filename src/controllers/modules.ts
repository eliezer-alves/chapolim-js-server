import { Request, Response } from "express";

export const createModule = async (req: Request, res: Response) => {
  return res.json({ data: req.body });
};
