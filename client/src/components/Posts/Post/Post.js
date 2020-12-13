import React from 'react';
import {Container, Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import image from "./image/picture.png";

const Post = ({ post }) => {
    const classes = useStyles();
    const a = ' ';
    return(
        <Container>
        
        {/* <img src={image} alt= "Click" height="550" width="450"/> */}
      

            <Card className={classes.card}>
                <CardMedia className={classes.media} image={post.selectedFile || "https://img.icons8.com/plasticine/100/000000/no-image.png"} title={post.title}/>
                <div className= {classes.overlay}> 
                    <Typography variant="h6">{post.creator}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                    {/* displays amount of time since post was created */}
                </div>
                <div className = {classes.overlay2}>
                    <Button style={{color: "white"}} size= "small" onClick={() => {}}>
                        <MoreHorizIcon fontSize = "default"/>
                    </Button>
                </div>
                <div className = {classes.details}>
                    <Typography variant="body2" color= "textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    {/* displays a string where each starts with the hashtage */}
                </div>
                <Typography className={classes.title} gutterBttom variant="h5" component="h2">{post.title}</Typography>
                <CardContent>
                    <Typography className={classes.message} variant="body2" color="textSecondary"component="p">{post.message}</Typography>
                </CardContent>
            </Card>
            <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={() => {}}>
                        <ThumbUpAltIcon fontSize="small"/>
                        {a + post.likeCount + a} 
                        Likes
                        
                    </Button>
                    <Button size="small" color="primary" onClick={() => {}}>
                        <DeleteIcon fontSize="small"/>
                        Delete
                    </Button>
                </CardActions>
        </Container>
    );
}

export default Post;




