import mongoose from "mongoose";
import {DB_NAME} from  "../constants.js"

const ConnectDB = async() => {
    try{
        const connectionInstances= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongoDB Connected !! DB HOST : ${connectionInstances.connection.host}`);
    }
    catch(error){
        console.log("MongoDB Error is : ", error)
        process.exit(1)
    }
}

export default ConnectDB