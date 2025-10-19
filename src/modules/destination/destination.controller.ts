import type { NextFunction, Request, Response } from "express";
import { DestinationService } from "./destination.service.js";

export const createDestination = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await DestinationService.createDestination(req as Request);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
export const getDestinations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await DestinationService.getDestinations(req as Request);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const getDestination = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await DestinationService.getDestination(req as Request);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const updateDestination = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await DestinationService.updateDestination(req as Request);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
export const deleteDestination = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await DestinationService.deleteDestination(req as Request);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
