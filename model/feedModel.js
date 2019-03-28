

const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL;


const pool = new Pool({connectionString: connectionString});

//soo the page has something to start with


function getTopTen(callback){
    const sql = "SELECT c.title, c.body, t.type_des FROM cards c JOIN types t ON c.type_id = t.id ORDER BY c.id DESC LIMIT 10";
    pool.query(sql, function(error, result){
        if (error) {
            console.log("Error in query: ");
            callback(error, null);
        }
        console.log("model " + JSON.parse(result.rows));
        callback(null, result.rows);
    })
};

module.exports = {
    getTopTen: getTopTen
}