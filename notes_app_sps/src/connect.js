import mongoose from "mongoose"
import {config} from "dotenv"
config()

const conection = async () =>{
    try {
        await mongoose.connect(process.env.CONNECT_MONGO)
        console.log(" DB CONNECT");
    } catch (error) {
        console.log(error.message)
    }
}

export default conection