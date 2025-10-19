import { TripService } from "./trip.service.js";
export const createTrip = async (req, res, next) => {
    try {
        const result = await TripService.createTrip(req);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const getTrips = async (req, res, next) => {
    try {
        const result = await TripService.getTrips(req);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const getTrip = async (req, res, next) => {
    try {
        const result = await TripService.getTrip(req);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const updateTrip = async (req, res, next) => {
    try {
        const result = await TripService.updateTrip(req);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const deleteTrip = async (req, res, next) => {
    try {
        const result = await TripService.deleteTrip(req);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=trip.controller.js.map