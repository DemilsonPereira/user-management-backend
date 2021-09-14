require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import "express-async-errors";
import cors from 'cors';

import './database';
import { router } from './routes';


class Server {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.configuration();
        this.middlewares();
        this.routes();
    }

    public configuration() {
        this.app.set('port', process.env.PORT || 3000);
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.get('/', (request: Request, response: Response) => {
            response.json({ msg: "Serve Online! 😎" });
        });
        this.app.use(router);
        this.app.use(
            (err: Error, resquest: Request, response: Response, next: NextFunction) => {
                if (err instanceof Error) {
                    return response.status(400).json({
                        error: err.message
                    });
                }

                return response.status(500).json({
                    status: "error",
                    message: "Internal Server Error"
                })
            });
    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening http://localhost:${this.app.get('port')}`);
        })
    }
}

export {
    Server
}
