"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connector = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
async function createDbConnection(hostName, user, db) {
    const connection = promise_1.default.createConnection({
        host: hostName,
        user: user,
        database: db,
        multipleStatements: true
    });
    return connection;
}
exports.connector = createDbConnection('localhost', 'root', 'huckingTables');
