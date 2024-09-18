import express from "express";
import bodyParser from 'body-parser';
import Register_U from './Routes/Register_U';
import Register_P from './Routes/Register_P';
import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());

app.use('/register', Register_U);
app.use('/Register_p', Register_P);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
