# Movie-lobby-api

Welcome to this movie lobby api project !
The lobby has a collection of movies with 
genre, rating, and streaming link. 

# Objective
1. List all the movies in the lobby
2. Search for a movie by title or genre
3. Add a new movie to the lobby
4. Update an existing movie information (title, genre, rating, or streaming link)
5. Delete a movie from the lobby

# Here's how to handle this project in your local machine :-

Step 1: Project Setup
Install necessary dependencies:

npm install express mongoose cors dotenv
npm install --save-dev typescript @types/node @types/express ts-node nodemon jest @types/jest ts-jest eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

Step 2: Run Your Application
Start MongoDB (if you haven't already):

mongod

Run the application:
You can use ts-node and nodemon for development:

npx nodemon src/server.ts

Run tests:
To run tests using Jest:

npx jest src/tests/movie.test.ts --watchAll --detectOpenHandles --forceExit 

# Brief API Documentation

Endpoints

GET /movies
Lists all movies.

GET /search?q={query}
Searches for movies by title or genre.

POST /movies
Adds a new movie (requires admin role).

PUT /movies/:id
Updates an existing movie's information (requires admin role).

DELETE /movies/:id
Deletes a movie (requires admin role).

Thank you for your kind perusal!
