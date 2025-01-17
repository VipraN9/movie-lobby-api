import express from "express";
import movieRoutes from "./routes/movie.route";


const app = express();

app.use(express.json()); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
