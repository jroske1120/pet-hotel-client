"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = __importDefault(require("pg"));
var url_1 = __importDefault(require("url"));
var config = {};
if (process.env.DATABASE_URL) {
    // Heroku gives a url, not a connection object
    // https://github.com/brianc/node-pg-pool
    var params = url_1.default.parse(process.env.DATABASE_URL);
    var auth = params.auth.split(':');
    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true,
        max: 10,
        idleTimeoutMillis: 30000,
    };
}
else {
    var host = process.env.POSTGRES_HOST
        ? process.env.POSTGRES_HOST
        : 'localhost'; // "localhost" is Docker's default
    var user = process.env.POSTGRES_USER
        ? process.env.POSTGRES_USER
        : 'postgres'; // "postgres" is the default username for Docker
    var password = process.env.POSTGRES_PASSWORD
        ? process.env.POSTGRES_PASSWORD
        : 'postgres'; // "postgres" is the default password for Docker
    var port = process.env.PORT_DB ? process.env.PORT_DB : 5432;
    var database = process.env.POSTGRES_DB
        ? process.env.POSTGRES_DB
        : process.env.DATABASE_NAME || 'pet_hotel';
    config = {
        host: host,
        // user,
        // password,
        port: port,
        database: database,
        max: 10,
        idleTimeoutMillis: 30000,
    };
}
// this creates the pool that will be shared by all other modules
var pool = new pg_1.default.Pool(config);
// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', function (err) {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
});
exports.default = pool;
