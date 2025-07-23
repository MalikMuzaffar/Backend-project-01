import mongoose, {Schema} from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema= new Schema({
    videofile: {
        type: String, //cloudinary url
        required: true
    },
    thumbnail:{
        type: String, //cloudinary url
        requirerd: true,
    },
    title:{
        type: String, 
        requirerd: true,
    },
    discreption:{
        type: String, 
        requirerd: true,
    },
    views:{
        type: Number, 
        default: 0
    },
    duration:{
        type: Number, //cloudinary url
        requirerd: true,
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps: true})


VideoSchema.plugin(mongooseAggregatePaginate)

export const Video= mongoose.model("Video", VideoSchema)