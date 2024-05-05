import express from 'express';
import * as path from 'path';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors())


app.get('/', (req, res, next) => {
    return res.json({ hello: 'hi'})
})


export default app;