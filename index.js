import express from 'express';
import dotenv from 'dotenv/config';
import { connectiondb } from './Backend/databases/db.js';

const app = express();
const port = process.env.PORT || 8000

connectiondb();

app.listen(port, ()=> {
    console.log(`Server Working on port ${port}`);
});
