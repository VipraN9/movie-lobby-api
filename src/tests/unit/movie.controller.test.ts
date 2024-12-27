import request from 'supertest';
import app from '../server'; // Adjust based on how you export your app

describe('Movie API', () => {

    it('should list all movies', async () => {
        const response = await request(app).get('/movies');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should search for movies by title', async () => {
        const response = await request(app).get('/search?q=Inception');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should add a new movie', async () => {
        const response = await request(app)
            .post('/movies')
            .send({
                title: 'New Movie',
                genre: 'Drama',
                rating: 7.5,
                streamingLink: 'https://example.com/newmovie'
            });
        expect(response.status).toBe(201);
        expect(response.body.title).toBe('New Movie');
    });

    it('should update an existing movie', async () => {
        // First add a movie to update later.
        const addedResponse = await request(app)
            .post('/movies')
            .send({
                title: 'Update Me',
                genre: 'Comedy',
                rating: 6.5,
                streamingLink: 'https://example.com/updateme'
            });
        
        const movieId = addedResponse.body._id;

        const response = await request(app)
            .put(`/movies/${movieId}`)
            .send({ title: 'Updated Title' });
        
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Updated Title');
    });

    it('should delete a movie', async () => {
        // First add a movie to delete later.
        const addedResponse = await request(app)
            .post('/movies')
            .send({
                title: 'Delete Me',
                genre: 'Horror',
                rating: 5.5,
                streamingLink: 'https://example.com/deleteme'
            });

        const movieId = addedResponse.body._id;

        const response = await request(app).delete(`/movies/${movieId}`);
        
        expect(response.status).toBe(204);
    });
});
