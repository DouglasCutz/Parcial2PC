// importar la conexion
import db from "../database/db.js";

// importar sequelize
import { DataTypes } from "sequelize";

const VentaModel =  db.define('ventas',{
    nombreCliente:{type: DataTypes.STRING},
    total:{type: DataTypes.INTEGER},
});

export default VentaModel;