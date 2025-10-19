import type { NextFunction, Request, Response } from "express";
import { ActivityService } from "./activity.service.js";

export const createActivity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ActivityService.createActivity(req as Request);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
export const getActivities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ActivityService.getActivities(req as Request);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const getActivity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ActivityService.getActivity(req as Request);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const updateActivity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ActivityService.updateActivity(req as Request);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const deleteActivity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ActivityService.deleteActivity(req as Request);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
