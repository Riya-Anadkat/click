import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'; 

const app = express();


app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

app.get('/', (req,res) => {
   res.send('Hello to Click API');
});

const CONNECTION_URL = 'mongodb+srv://new_user:new_user123@cluster0.fvffj.mongodb.net/<dbname>?retryWrites=true&w=majority'
const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true })
   .then(() => app.listen(port, () => console.log(`Server is running on port: ${port}`)))
   .catch((error) =>  console.log(error.message)); 

mongoose.set('useFindAndModify', false); 

