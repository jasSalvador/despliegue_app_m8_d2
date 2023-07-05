import app from "./src/app.js";
//import 'dotenv/config'; //variables entorno desde .env
import sequelize from "./src/database/database.js";

//modelos
import "./src/models/Producto.models.js"

const PORT = process.env.PORT || 3000;

const main = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conectado con éxito a la base de datos.");
        await sequelize.sync({ force: true, alter: true });
        app.listen(PORT, () =>
            console.log("Servidor escuchando en puerto: " + PORT)
        );
    } catch (error) {
        console.log("Ha un ocurrido un error", error);
    }
};



main();