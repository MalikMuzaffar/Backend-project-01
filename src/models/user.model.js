import mongoose, {Schema} from "mongoose";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const UserSchema= new Schema({
    username:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        index: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, //cloudinary url
        requirerd: true,
    },
    coverimage:{
        type: String // cloudinary url
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    refreshToken:{
        type: String
    }
}, {timestamps: true})


UserSchema.pre("save", async function(next) {
    if (!this.isModified("password")) next();

    this.password= bcrypt.hash(this.password, 10)
    next()
})

UserSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password, this.password)
}

UserSchema.methods.generateAccessToken= function(){
    jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

UserSchema.methods.generateRefreshToken= function(){
     jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User= mongoose.model("User", UserSchema)