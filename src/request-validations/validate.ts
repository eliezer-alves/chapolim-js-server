import { NextFunction, Request, Response } from "express";
import { OptionalObjectSchema } from "yup/lib/object";

const validate =
  (schema: OptionalObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  };

export default validate;
