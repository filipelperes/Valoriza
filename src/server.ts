import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
import { router } from "./routes";

import "./database";
import cors from "cors";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());
app.use(router);
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
   return err instanceof Error ? response.status(400).json({
      error: err.message
   }) : response.status(500).json({
      status: "error",
      message: "Internal Server Error"
   });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));