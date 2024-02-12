/* VARIABLE DECLARATION */
const express = require("express");

const cors = require('cors')
const app = express();

/* REQUIRES */
require('dotenv').config({path: `${__dirname}/config.env` });

/* PUBLIC SETTING */
app.use(express.static("public"));
app.use(cors({
    origin: process.env.CLIENT,
}));

/* SERVER LISTEN */
app.listen(process.env.PORT, () => {
    console.log(`[server] corriendo en el puerto ${process.env.PORT} (http://localhost:${process.env.PORT}/)`);
})