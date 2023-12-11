require('dotenv').config();
import express from 'express';

export const generator = async (req: express.Request, res: express.Response) => {
    try {
        res.send('Hello World!').status(200);

    }catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}