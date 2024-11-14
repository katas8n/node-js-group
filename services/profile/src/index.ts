require('dotenv').config();

import cors from 'cors';
import express, { Request, Response } from 'express';
import { createServer } from 'http';
import path from 'path';
import { router } from './routes/profile.route';
import { connector } from './util/dbConnector';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// express static
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);
app.use((req: Request, res: Response) => {
    res.json({
        msg: 'Incorrect path.'
    });
});

const server = createServer(app);

server.listen(process.env.PORT || 8082, async () => {
    try {
        const dbInterface = await connector;

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
    } catch (e) {
        console.log('There is an Error!' + e);
    }

    console.log(
        'Server has been successfully running on the port: ' + process.env.PORT
    );
});
