require('dotenv').config();

import cors from 'cors';
import express, { Request, Response } from 'express';
import http from 'http';
import authRouter from './routes/authorisation.route';
import { connector } from './util/dbConnector';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRouter);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        msg: "How's it going?"
    });
});

const server = http.createServer(app);

server.listen(process.env.PORT || 8080, async () => {
    try {
        const dbInterface = await connector;

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
    } catch (e) {
        console.log('There is an Error!' + e);
    }

    console.log(
        'Server has been successfully running on the port: ' + process.env.PORT
    );
});
