const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Staff Endpoints', () => {
  it('should create a new staff member', async () => {
    const res = await request(app).post('/api/staff').send({
      name: 'Jane Smith',
      role: 'Librarian',
      hireDate: '2020-05-15',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Jane Smith');
  });

  it('should list all staff members', async () => {
    const res = await request(app).get('/api/staff');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
