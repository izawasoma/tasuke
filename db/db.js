const { Pool } = require('pg');
const db_config = {
    user: 'postgres',
    host: 'localhost',
    database: 'tasuke',
    password: 'postgres',
    port: 5432,
}
const pool = new Pool(db_config);

/**
 * Postgresクラス
 */
class Postgres {

    async init() {
        this.client = await pool.connect();
    }

    async execute(query, params = []) {
        return (await this.client.query(query, params)).rows;
    }

    async release() {
        await this.client.release(true);
    }

    async begin() {
        await this.client.query('BEGIN');
    }

    async commit() {
        await this.client.query('COMMIT');
    }

    async rollback() {
        await this.client.query('ROLLBACK');
    }
}

const getClient = async () => {
    const postgres = new Postgres();
    await postgres.init();
    return postgres;
};

module.exports.getPostgresClient = getClient;