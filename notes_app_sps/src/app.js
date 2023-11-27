import express from "express"
import morgan from "morgan"
import "colors"
import userRoutes from "./routes/user.routes.js"

const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use('servicio/api_notes_app', userRoutes)

export default app