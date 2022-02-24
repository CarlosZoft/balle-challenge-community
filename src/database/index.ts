import { createConnection } from 'typeorm';

class Database {
    constructor() {
        this.connect();
    }
    async connect() {
        const statusOfconnection = await createConnection();
        statusOfconnection ? console.log('Database connected') : console.log('Database not connected');
    }
}
