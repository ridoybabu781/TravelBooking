import { Destination } from "./destination.model.js";
import createHttpError from "http-errors";
import { success } from "zod";
const createDestination = async (req) => {
    const destination = await Destination.create(req.body);
    if (!destination) {
        throw createHttpError(400, "Failed to create destination");
    }
    return {
        success: true,
        message: "Destination added successfully",
        destination,
    };
};
const getDestinations = async (req) => {
    const destinations = await Destination.find();
    if (!destinations || destinations.length === 0) {
        throw createHttpError(404, "No destination found");
    }
    return {
        success: true,
        message: "Destinations fetched successfully",
        destinations,
    };
};
const getDestination = async (req) => {
    const destination = await Destination.findById(req.params.id);
    if (!destination) {
        throw createHttpError(404, "destination not found");
    }
    return {
        success: true,
        message: "Destination fetched successfully",
        destination,
    };
};
const updateDestination = async (req) => {
    const destination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!destination) {
        throw createHttpError(404, "destination updation failed");
    }
    return {
        success: true,
        message: "Destination updaetd successfully",
        destination,
    };
};
const deleteDestination = async (req) => {
    const destination = await Destination.findByIdAndDelete(req.params.id);
    if (!destination) {
        throw createHttpError(404, "destination deletion failed");
    }
    return {
        success: true,
        message: "Destination deleted successfully",
        destination,
    };
};
export const DestinationService = {
    createDestination,
    getDestinations,
    getDestination,
    updateDestination,
    deleteDestination,
};
//# sourceMappingURL=destination.service.js.map