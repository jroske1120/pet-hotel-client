"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var template_router_1 = __importDefault(require("./routes/template.router"));
var owner_router_1 = __importDefault(require("./routes/owner.router"));
var app = express_1.default();
// Body parser middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
/* Routes */
app.use('/api/template', template_router_1.default);
app.use('/api/owner', owner_router_1.default);
// Serve static files
app.use(express_1.default.static('build'));
// App Set //
var PORT = process.env.PORT || 5000;
/** Listen * */
app.listen(PORT, function () {
    console.log("So awesome. Much wow. Listening on port: " + PORT);
});
exports.default = app;
