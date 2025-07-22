import mongoose  from "mongoose";

import {DB_NAME} from  "../src/constants.js";

import ConnectDB from "./db/index.js";

import dotenv from "dotenv";

dotenv.config({
    path: "./env"
})

// import 'dotenv/config'



ConnectDB() 