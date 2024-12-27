import { Request, Response } from "express";
import Movie from "../models/movie.model";

// List all movies
export const listMovies = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

// Search movies by title or genre
export const searchMovies = async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;
    const movies = await Movie.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { genre: { $regex: query, $options: "i" } },
      ],
    });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: "Search failed" });
  }
};

// Add a new movie
export const addMovie = async (req: Request, res: Response) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: "Failed to add movie" });
  }
};

// Update movie by ID
export const updateMovie = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { title, genre, rating, streamingLink } = req.body;
  
      // Find and update the movie
      const updatedMovie = await Movie.findByIdAndUpdate(
        id,
        { title, genre, rating, streamingLink },
        { new: true } 
      );
  
      if (!updatedMovie) {
        res.status(404).json({ message: "Movie not found" });
        return; 
      }
  
      res.status(200).json(updatedMovie); 
    } catch (error) {
      console.error("Error updating movie:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

// Delete movie by ID
export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
  
      // Find and delete the movie
      const deletedMovie = await Movie.findByIdAndDelete(id);
  
      if (!deletedMovie) {
        res.status(404).json({ message: "Movie not found" });
        return; 
      }
  
      res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
      console.error("Error deleting movie:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
