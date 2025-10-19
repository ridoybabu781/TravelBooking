import mongoose from "mongoose";
import app from "./app.js";
import { dotenv } from "./config/dotenv.js";
const main = async () => {
    await mongoose.connect(dotenv.db_url);
    console.log("Database connected");
    app.listen(dotenv.port, () => {
        console.log("server is running on port ", dotenv.port);
    });
};
main();
//# sourceMappingURL=server.js.map