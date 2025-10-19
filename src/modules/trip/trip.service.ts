import type { Request } from "express";
import createHttpError from "http-errors";
import { Trip } from "./trip.model.js";

const createTrip = async (req: Request) => {
  const trip = await Trip.create(req.body);
  if (!trip) {
    throw createHttpError(400, "Failed to create trip");
  }
  return {
    success: true,
    message: "Trip added successfully",
    trip,
  };
};

const getTrips = async (req: Request) => {
  const trips = await Trip.find();

  if (!trips || trips.length === 0) {
    throw createHttpError(404, "No trip found");
  }
  return {
    success: true,
    message: "Trips fetched successfully",
    trips,
  };
};

const getTrip = async (req: Request) => {
  const trip = await Trip.findById(req.params.id);

  if (!trip) {
    throw createHttpError(404, "trip not found");
  }
  return {
    success: true,
    message: "Trip fetched successfully",
    trip,
  };
};

const updateTrip = async (req: Request) => {
  const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!trip) {
    throw createHttpError(404, "trip updation failed");
  }
  return {
    success: true,
    message: "Trip updaetd successfully",
    trip,
  };
};

const deleteTrip = async (req: Request) => {
  const trip = await Trip.findByIdAndDelete(req.params.id);

  if (!trip) {
    throw createHttpError(404, "trip deletion failed");
  }
  return {
    success: true,
    message: "Trip deleted successfully",
    trip,
  };
};

export const TripService = {
  createTrip,
  getTrips,
  getTrip,
  updateTrip,
  deleteTrip,
};
