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
    var queryString = "SELECT \"owners\".\"name\" as owners_name, \"pets\".\"name\" as pets_name, \n        \"breed\", \"color\", \"checked_in\", \"pets\".\"id\" FROM \"pets\" JOIN  \"owners\" ON \"pets\".\"owner_id\" = \"owners\".\"id\";";
    pool_1.default
        .query(queryString)
        .then(function (response) {
        console.log('display get:', response.rows);
        res.send(response.rows);
        console.log(response.rows);
    })
        .catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});
exports.default = router;
