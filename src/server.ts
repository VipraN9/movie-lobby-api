import express from "express";
import movieRoutes from "./routes/movie.route";


const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

// Use the authRoutes for authentication-related routes (like login)


// Use the movieRoutes for movie-related routes
app.use("/api", movieRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
