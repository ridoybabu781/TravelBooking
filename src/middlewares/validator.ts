import type { NextFunction, Request, Response } from "express";
import type z from "zod";

export const validator = (schema: z.ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const parse = schema.parse({
        body: req.body,
        params: req.params,
      });

      req.body = parse.body;
      req.params = parse.params;

      next();
    } catch (error) {
      next(error);
    }
  };
};
