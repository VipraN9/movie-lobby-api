# movie-lobby-api

Welcome to this api project !

Here's how to handle this project in your local machine :-

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
