import createHttpError from "http-errors";
import { Activity } from "./activity.model.js";
const createActivity = async (req) => {
    const activity = await Activity.create(req.body);
    if (!activity) {
        throw createHttpError(400, "Failed to create activity");
    }
    return {
        success: true,
        message: "activity added successfully",
        activity,
    };
};
const getActivities = async (req) => {
    const activities = await Activity.find();
    if (!activities || activities.length === 0) {
        throw createHttpError(404, "No activities found");
    }
    return {
        success: true,
        message: "activities fetched successfully",
        activities,
    };
};
const getActivity = async (req) => {
    const activity = await Activity.findById(req.params.id);
    if (!activity) {
        throw createHttpError(404, "activity not found");
    }
    return {
        success: true,
        message: "activity fetched successfully",
        activity,
    };
};
const updateActivity = async (req) => {
    const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!activity) {
        throw createHttpError(404, "activity updation failed");
    }
    return {
        success: true,
        message: "activity updaetd successfully",
        activity,
    };
};
const deleteActivity = async (req) => {
    const activity = await Activity.findByIdAndDelete(req.params.id);
    if (!activity) {
        throw createHttpError(404, "activity deletion failed");
    }
    return {
        success: true,
        message: "activity deleted successfully",
        activity,
    };
};
export const ActivityService = {
    createActivity,
    getActivities,
    getActivity,
    updateActivity,
    deleteActivity,
};
//# sourceMappingURL=activity.service.js.map