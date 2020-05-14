"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var pool_1 = __importDefault(require("../modules/pool"));
var router = express_1.default.Router();
/**
 * GET route template
 */
router.get('/', function (req, res, next) {
    var queryString = "SELECT * FROM \"owners\"";
    pool_1.default
        .query(queryString)
        .then(function (response) {
        res.send(response);
    })
        .catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});
/**
 * POST route template
 */
router.post('/', function (req, res, next) {
    console.log('userId:', req.body.userId);
    var sqlText = "INSERT INTO \"pets\" (\"name\", \"breed\", \"color\") VALUES ($1, $2, $3)";
    var queryText = [req.body.name, req.body.breed, req.body.color];
    pool_1.default.
        query(sqlText, queryText)
        .then(function () {
        res.sendStatus(200);
    }).catch(function (error) {
        console.log('drop_info query error:', error);
        res.sendStatus(500);
    }); // end post query
});
exports.default = router;
