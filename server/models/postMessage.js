import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    //values that will be set
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    
    //objects with default values
    likeCount: {
        type: Number, 
        default: 0
    },
    createdAt: {
        type: Date,
        default : new Date() 
    } 
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage; 

