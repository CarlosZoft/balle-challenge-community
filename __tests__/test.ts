import request from 'supertest';
import app from '../src/config/app';

describe('GET / - Test', () => {
    it('responds with Hello World!', (done) => {
        request(app).get('/test').expect('Hello World!', done);
    });
});
