import express from 'express';
import * as path from 'path';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors())

app.use(express.static(path.resolve(__dirname, "..", "frontend", "dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname,"..","frontend", "dist", "index.html"));
});


export default app;