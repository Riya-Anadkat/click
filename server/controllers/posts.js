
import mongoose from 'mongoose';
import PostMessage from "../models/postMessage.js";


export const getPosts = async(req,res) => {
    //catch happens if there is an error , otherwise try to retrieve all posts in database
    try {
        const postMessages = await PostMessage.find();
        //finding takes time, so it is an asynchronous action

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error}); 
    }
}

export const createPost = async(req,res) => {
    const post = req.body;
    
    //passing value recieved to create a new post
    const newPost = new PostMessage(post);
    
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message}); 
        //using HTTP status codes
    }
}
export const updatePost = async (req, res) => {
    const{ id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    //checking if id is a moongoose id 
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id}, {new: true});

    res.json(updatePost);

}

