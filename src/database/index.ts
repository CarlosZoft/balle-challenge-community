class Database {
    constructor() {
        this.connect();
    }
    async connect() {
        console.log('Trying to connect to database...');
        const statusOfconnection = () => {};
        statusOfconnection ? console.log('Database connected') : console.log('Database not connected');
    }
}

export default new Database();
