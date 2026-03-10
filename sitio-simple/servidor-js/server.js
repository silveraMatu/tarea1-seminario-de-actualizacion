import express from "express";
const app = express()

app.use(express.static("../js-puro"))

app.listen(3000)