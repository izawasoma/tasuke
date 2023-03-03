const { Pool } = require('pg');

const db_config = {
    user: 'yzkgynjeuyrdts',
    host: 'ec2-54-160-109-68.compute-1.amazonaws.com',
    database: 'd54n1qq9id49kn',
    password: 'ae2caf0bbc24c575f67d08ba0427143e7c8c4b051f27809e0696ab8ddf7c41d1',
    port: '5432',
}
const pool = new Pool(db_config);

/**
 * Postgresクラス
 */
class Postgres {

    async init() {
        console.log("[Postgres Class] init");
        console.log("CONFIG::" + process.env.DB_DATABASE);
        pool.query('SELECT * from admins', (err, result) => {
            if (err) {
              return console.error('Error executing query', err.stack)
            }
            console.log(result.rows[0]) // brianc
        })
        this.client = pool;
    }

    async execute(query, params = []) {
        console.log("[Postgres Class] execute");
        return (await this.client.query(query, params)).rows;
    }

    async release() {
        console.log("[Postgres Class] release");
        await this.client.release(true);
    }

    async begin() {
        console.log("[Postgres Class] begin");
        await this.client.query('BEGIN');
    }

    async commit() {
        console.log("[Postgres Class] commit");
        await this.client.query('COMMIT');
    }

    async rollback() {
        console.log("[Postgres Class] rollback");
        await this.client.query('ROLLBACK');
    }
}

const getClient = async () => {
    const postgres = new Postgres();
    await postgres.init();
    return postgres;
};

module.exports.getPostgresClient = getClient;