import { DestinationService } from "./destination.service.js";
export const createDestination = async (req, res, next) => {
    try {
        const result = await DestinationService.createDestination(req);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const getDestinations = async (req, res, next) => {
    try {
        const result = await DestinationService.getDestinations(req);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const getDestination = async (req, res, next) => {
    try {
        const result = await DestinationService.getDestination(req);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const updateDestination = async (req, res, next) => {
    try {
        const result = await DestinationService.updateDestination(req);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const deleteDestination = async (req, res, next) => {
    try {
        const result = await DestinationService.deleteDestination(req);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=destination.controller.js.map