"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var pool_1 = __importDefault(require("../modules/pool"));
var router = express_1.default.Router();
/**
 * GET ROUTE FOR GETTING OWNER
 */
router.get('/', function (req, res, next) {
    console.log('In GET on Owner router');
    var queryString = "SELECT \"owners\".\"id\", \"owners\".\"name\", COUNT( \"owners\".\"id\" ) AS \"pet_count\" FROM \"owners\"\n                                JOIN \"pets\" ON \"pets\".\"owner_id\" = \"owners\".\"id\"\n                                GROUP BY \"owners\".\"id\";";
    pool_1.default
        .query(queryString)
        .then(function (response) {
        res.send(response.rows);
    })
        .catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});
/**
 * POST ROUTE FOR ADDING OWENER TO DATABSE
 */
router.post('/', function (req, res, next) {
    //   get owner from request body
    console.log("In owner router", req.body.name);
    var owner = req.body.name;
    var queryText = "INSERT INTO \"owners\" (\"name\")\n                                VALUES($1)";
    pool_1.default.query(queryText, [owner])
        .then(function (response) {
        res.sendStatus(201);
    })
        .catch(function (error) {
        console.log("Error POSTING to the database", error);
        res.sendStatus(501);
    });
}); // end POST ROUTE
exports.default = router;
