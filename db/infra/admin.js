const { getPostgresClient } = require("../db");
const Admin = require("./../model/admin");

module.exports = {
    Get : async function(){
        const db = await getPostgresClient();
/*         let result;
        try {
            const sql = `SELECT * FROM admins`;
            await db.begin();
            result = await db.execute(sql);
            console.log(result);
            await db.commit();
        } catch (e) {
            await db.rollback();
            throw e;
        } finally {
            await db.release();
            return new Admin(result.id,result.login_id,result.password);
        } */
    }
}