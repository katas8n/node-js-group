"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const path_1 = __importDefault(require("path"));
const profile_route_1 = require("./routes/profile.route");
const dbConnector_1 = require("./util/dbConnector");
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// express static
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/api', profile_route_1.router);
app.use((req, res) => {
    res.json({
        msg: 'Incorrect path.'
    });
});
const server = (0, http_1.createServer)(app);
server.listen(process.env.PORT || 8082, async () => {
    try {
        const dbInterface = await dbConnector_1.connector;
        const [res, fields] = await dbInterface.query({
            sql: `CREATE TABLE IF NOT EXISTS profiles(
                id int auto_increment primary key,
                name varchar(255),
                surname varchar(255),
                role varchar(255),
                email varchar(255)
            );

            SELECT * FROM users;`
        });
        console.log(res);
    }
    catch (e) {
        console.log('There is an Error!' + e);
    }
    console.log('Server has been successfully running on the port: ' + process.env.PORT);
});
