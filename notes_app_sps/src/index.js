import app from "./app.js";
import "colors"
import {
    config
} from "dotenv"
import conection from "./connect.js";
config();
conection();

const PORT = process.env.PORT || 5070;

app.listen(PORT, () => console.log(`  Server on port ${PORT}  `.bgBlue.yellow));