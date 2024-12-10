const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Non-Fiction Book Endpoints', () => {
  it('should create a new non-fiction book', async () => {
    const res = await request(app).post('/api/non-fiction').send({
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      genre: 'History',
      publishedYear: 2011,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Sapiens');
  });

  it('should list all non-fiction books', async () => {
    const res = await request(app).get('/api/non-fiction');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
