import cors from "cors";
import { CORS_FRONT } from "../config.js";

const ACCEPTED_ORIGINS = ["http://localhost:8080", "http://localhost:5173", CORS_FRONT];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
  });
