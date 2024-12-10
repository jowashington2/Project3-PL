const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Fiction Book Endpoints', () => {
  it('should create a new fiction book', async () => {
    const res = await request(app).post('/api/fiction').send({
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      publishedYear: 1925,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'The Great Gatsby');
  });

  it('should list all fiction books', async () => {
    const res = await request(app).get('/api/fiction');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
