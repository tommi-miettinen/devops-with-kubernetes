import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8080;

app.listen(port, () => console.log(`Server started in port ${port}`));
