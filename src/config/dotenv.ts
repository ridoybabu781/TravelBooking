import { configDotenv } from "dotenv";
configDotenv();

export const dotenv = {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  jwt_secret: process.env.JWT_SECRET,

  origin: "http://localhost:5173",
};
