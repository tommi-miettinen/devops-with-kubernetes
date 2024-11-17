import crypto from "crypto";
import express from "express";

const PORT = process.env.PORT ?? 3000;
const app = express();

const generateLog = () => {
    const date = new Date().toISOString();
    const random = crypto.randomUUID();
    return `[${date}]: ${random}`;
};

let current = "";
setInterval(() => {
    current = generateLog();
    console.log(current);
}, 5000);

app.get("/", (_, res) => res.send(current));
app.listen(PORT, () => console.log(`Server started in port ${PORT}`));
