"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var pool_1 = __importDefault(require("../modules/pool"));
var router = express_1.default.Router();
/**
 * POST route template
 */
router.post('/', function (req, res, next) {
    var sqlText = "INSERT INTO \"pets\" (\"name\", \"breed\", \"color\", \"owner_id\") VALUES ($1, $2, $3, $4)";
    var queryText = [req.body.name, req.body.breed, req.body.color, req.body.owner_id];
    console.log('user_id:', req.body.user_id);
    pool_1.default.
        query(sqlText, queryText)
        .then(function () {
        res.sendStatus(200);
    }).catch(function (error) {
        console.log('drop_info query error:', error);
        res.sendStatus(500);
    }); // end post query
});
/**
 * DELETE ROUTE
 */
router.delete('/delete/:id', function (req, res, next) {
    console.log('in delete route');
    var pet_id = req.params.id;
    console.log('speech id is', pet_id);
    //Deletes a speech from the speech_info table
    var queryText = "DELETE FROM pets WHERE id = $1;";
    pool_1.default.query(queryText, [pet_id]).then(function (result) {
        res.sendStatus(202);
    }).catch(function (error) {
        console.log("Error on query " + error);
        res.sendStatus(500);
    });
});
router.put('/checkin/:id', function (req, res, next) {
    var pet_id = req.params.id;
    var checked_in = req.body.checked_in;
    var queryText = "UPDATE pets SET checked_in = $1 WHERE id = $2;";
    pool_1.default.query(queryText, [checked_in, pet_id]).then(function (result) {
        res.sendStatus(204);
    }).catch(function (error) {
        console.log("Error on query " + error);
        res.sendStatus(500);
    });
});
exports.default = router;
