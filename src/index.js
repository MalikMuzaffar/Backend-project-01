// import mongoose  from "mongoose";

// import {DB_NAME} from  "../src/constants.js";
import app from "./app.js";



import ConnectDB from "./db/index.js";

import dotenv from "dotenv";




dotenv.config({
    path: "./env"
})

// import 'dotenv/config'



ConnectDB() 
.then(() => {
    app.listen(process.env.PORT|| 8000, ()=> {
        console.log(`Server is running at : ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("error is :" , err);
})