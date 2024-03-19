import express, { response } from 'express'
import { PORT,  mongoDBURI} from './config.js';
import mongoose, { mongo } from 'mongoose';
import { Book } from './bookModel.js';
import BooksRoute from './routes/BooksRoute.js';
import cors from 'cors'


const app = express();

// Middleware for parsig json in request body
app.use(express.json());

// middleware for cors 
app.use(cors());

// base root
app.get("/",(req,res) => {
    res.send("hello");  
})

app.use("/books",BooksRoute);


mongoose
    .connect(mongoDBURI)
    .then(()=>{
        console.log("connected to database");
        app.listen(PORT,()=>{
            console.log(`live on port ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error);
    })
