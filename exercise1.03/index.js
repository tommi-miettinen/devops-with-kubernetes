import crypto from "crypto";

setInterval(() => {
    const date = new Date().toISOString();
    const random = crypto.randomUUID();
    console.log(`[${date}]: ${random}`);
}, 5000);
