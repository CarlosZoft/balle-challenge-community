const configOfOrm = {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/database/entity/*.ts'],
    cli: {
        migrationsDir: 'src/database/migrations',
        entitiesDir: 'src/database/entity',
    },
};

console.log(
    process.env.TYPEORM_CONNECTION,
    process.env.DB_HOST,
    process.env.DB_PORT,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_DB,
);
export default configOfOrm;
