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
    var queryString = "INSERT INTO \"sample\" (\"cats\") VALUES ($1)";
    pool_1.default
        .query(queryString, ['Gizmo'])
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
    res.sendStatus(201);
});
exports.default = router;
