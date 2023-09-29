import express from "express";
import cors from 'cors';
//importando la conexion a la base de datos
import db from "./database/db.js";
//Importanto rutas
import blogRoutes from './routes/routes.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use('/ventas', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexion completada')
} catch (error) {
    console.log('Error en conexión')
}

app.get('/',(req,res)=>{
    res.send('Hola mundo')
})

app.listen(8000, () => {
    console.log('Server Up Running in http://localhost:8000')
})