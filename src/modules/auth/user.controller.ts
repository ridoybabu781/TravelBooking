import type { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service.js";
import createHttpError from "http-errors";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await UserService.SSignup(req as Request);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await UserService.SLogin(req as Request);

    if (!result) {
      throw createHttpError(400, "Something went wrong in login");
    }

    res
      .status(201)
      .cookie("token", result.token, {
        httpOnly: true,
        sameSite: "none",
        secure: false,
      })
      .json(result);
  } catch (error) {
    next(error);
  }
};
