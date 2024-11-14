import mysql from 'mysql2/promise';

async function createDbConnection(hostName: string, user: string, db: string) {
    const connection = mysql.createConnection({
        host: hostName,
        user: user,
        database: db,
        multipleStatements: true
    });

    return connection;
}

export const connector = createDbConnection(
    'localhost',
    'root',
    'huckingTables'
);
