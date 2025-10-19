import type { NextFunction, Request, Response } from "express";
import { TripService } from "./trip.service.js";

export const createTrip = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await TripService.createTrip(req as Request);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
export const getTrips = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await TripService.getTrips(req as Request);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const getTrip = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await TripService.getTrip(req as Request);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const updateTrip = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await TripService.updateTrip(req as Request);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const deleteTrip = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await TripService.deleteTrip(req as Request);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
