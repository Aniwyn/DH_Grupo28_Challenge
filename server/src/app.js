/* VARIABLE DECLARATION */
const express = require("express");
const cors = require('cors')
const app = express();
const routes = require("./routes/router.js")

/* REQUIRES */
require('dotenv').config({ path: `${__dirname}/../.env` });

app.use(express.json()); // Para analizar datos en formato JSON
app.use(express.urlencoded({ extended: true })); // Para analizar datos en formato x-www-form-urlencoded


/* PUBLIC SETTING */
app.use(express.static("public"));
app.use(cors({
    origin: process.env.CLIENT
}));
/* ROUTING */
app.use("/api/",routes)


/* SERVER LISTEN */
const PORT = process.env.SERVER || 4000
app.listen(PORT, () => {
    console.log(`[server] corriendo en el puerto ${PORT} (http://localhost:${PORT}/)`);
})