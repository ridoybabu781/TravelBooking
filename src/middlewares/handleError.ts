import type { Request, Response, NextFunction } from "express";

export const handleError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    res
      .status(err.status || 500)
      .json({ message: err.message || "An error occurred", success: false });
  }
};
