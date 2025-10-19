import { ActivityService } from "./activity.service.js";
export const createActivity = async (req, res, next) => {
    try {
        const result = await ActivityService.createActivity(req);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const getActivities = async (req, res, next) => {
    try {
        const result = await ActivityService.getActivities(req);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const getActivity = async (req, res, next) => {
    try {
        const result = await ActivityService.getActivity(req);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const updateActivity = async (req, res, next) => {
    try {
        const result = await ActivityService.updateActivity(req);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
export const deleteActivity = async (req, res, next) => {
    try {
        const result = await ActivityService.deleteActivity(req);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=activity.controller.js.map