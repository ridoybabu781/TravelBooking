import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export const checkRole = (...role: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;

      if (!role.includes(user.role)) {
        throw createHttpError(401, "Unauthorized user");
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};
