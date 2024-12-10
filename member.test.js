const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Library Member Endpoints', () => {
  it('should create a new member', async () => {
    const res = await request(app).post('/api/members').send({
      name: 'John Doe',
      membershipDate: '2023-01-01',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'John Doe');
  });

  it('should list all members', async () => {
    const res = await request(app).get('/api/members');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
