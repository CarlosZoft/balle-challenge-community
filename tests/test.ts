import request from 'supertest';
import app from '../src/config/express';

describe('GET / - Test', () => {
    it('responds with Hello World!', (done) => {
        request(app).get('/').expect('Hello World!', done);
    });
});
