"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const authorisation_route_1 = __importDefault(require("./routes/authorisation.route"));
const dbConnector_1 = require("./util/dbConnector");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', authorisation_route_1.default);
app.get('/', (req, res) => {
    res.status(200).json({
        msg: "How's it going?"
    });
});
const server = http_1.default.createServer(app);
server.listen(process.env.PORT || 8080, async () => {
    try {
        const dbInterface = await dbConnector_1.connector;
        const [res, fields] = await dbInterface.query({
            sql: `CREATE TABLE IF NOT EXISTS users(
                    id int auto_increment primary key,
                    name varchar(255),
                    email varchar(255),
                    password varchar(255)
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
