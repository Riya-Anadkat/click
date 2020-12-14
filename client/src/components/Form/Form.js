import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import image from "./gif/printing.gif";


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '',title: '', message: '', tags:'', selectedFile:''
    });
    //data is stored in postData object and each has a text field 
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    
    const classes = useStyles();
    const dispatch = useDispatch();
    var isSubmit = false;

    useEffect(() => {
        if (post) setPostData(post);
      }, [post]);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // prevents browser refresh
        isSubmit = true;

        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
          } else {
            dispatch(updatePost(currentId, postData));
            clear();
          }
        
    }

    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
      };
      console.log(isSubmit);
    return(
        <div>
            
            <Paper className= {classes.paper}>
            
                <form autoComplete="off" noValidate className={'${classes.root} ${classes.form}'} 
                onSubmit={ handleSubmit}> 
                    <Typography className = {classes.heading} variant= "h6" align ="center" >Create a Click</Typography>
                    <TextField className = {classes.textfield} name="creator" variant= "outlined" label= "Name" fullWidth value={postData.creator}
                    onChange={(e) => setPostData({...postData, creator: e.target.value}) }
                    //seting the state using an object 
                    //using event as parameter and setter method for post data 
                    //spread it across post data
                />
                <TextField className = {classes.textfield} name="title" variant= "outlined" label= "Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value}) } />
                <TextField className = {classes.textfield} name="message" variant= "outlined" label= "Description" fullWidth value={postData.message} fullWidth multiline rows={4} onChange={(e) => setPostData({...postData, message: e.target.value}) } />
                <TextField className = {classes.textfield} name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                    <div className = {classes.fileInput}>
                        <FileBase type= "file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
                    </div>
                    <Button className={classes.buttonSubmit} variant= "contained" color= "primary" size= "large" type= "submit" fullWidth> Submit</Button>
                    <Button className={classes.buttonSubmit} variant= "contained" color= "secondary" size= "small" onClick={clear} fullWidth> Clear</Button>
                </form>
            </Paper>

            <img className={classes.image} src={image} alt= "image" height="250" width="160"/>
                
           
        </div>
        
    );
}

export default Form;
