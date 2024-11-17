import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8080;

app.get("/", (_, res) => res.send("<h1>Moro</h1>"));
app.listen(port, () => console.log(`Server started in port ${port}`));
