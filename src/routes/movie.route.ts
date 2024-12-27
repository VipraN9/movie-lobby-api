import express from "express";
import { authMiddleware, adminMiddleware } from "../middleware/auth.middleware";
import {
  listMovies,
  searchMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.controller";

const router = express.Router();

// Public routes (no authentication required)
router.get("/movies", listMovies);
router.get("/search", searchMovies);

// Protected routes (admin only)
router.post("/movies", authMiddleware, adminMiddleware, addMovie);
router.put("/movies/:id", authMiddleware, adminMiddleware, updateMovie);
router.delete("/movies/:id", authMiddleware, adminMiddleware, deleteMovie);

export default router;
