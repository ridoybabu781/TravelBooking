import { model, Schema } from "mongoose";
const ActivitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
});
export const Activity = model("Activity", ActivitySchema);
//# sourceMappingURL=activity.model.js.map