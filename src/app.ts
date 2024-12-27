import express, { Application } from "express";
import mongoose from "mongoose";
import movieRoutes from "./routes/movie.route";
import { authMiddleware, adminMiddleware } from './middleware/auth.middleware';

const app: Application = express();

// Middleware
app.use(authMiddleware, adminMiddleware);

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/movie-lobby");
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

// Routes
app.use("/api", movieRoutes);

connectDB();

export default app;
