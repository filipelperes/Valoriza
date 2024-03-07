import "reflect-metadata";
import express from 'express';

import "./database";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server is running'));

// AULA 1 - OK
// AULA 2 - 36:00