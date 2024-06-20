// tests/task.test.js
const request = require('supertest');
const app = require('../app');
const Task = require('../models/Task');

beforeAll(async () => {
    await Task.deleteMany({});
});

describe('Task API', () => {
    it('should create a new task', async () => {
        const response = await request(app)
            .post('/api/tasks')
            .send({ title: 'Test Task', description: 'Test Description' })
            .expect(201);

        expect(response.body.title).toBe('Test Task');
    });

    it('should get all tasks', async () => {
        const response = await request(app)
            .get('/api/tasks')
            .expect(200);

        expect(response.body.length).toBe(1);
    });
    // Add more test cases for update, delete, etc.
});
