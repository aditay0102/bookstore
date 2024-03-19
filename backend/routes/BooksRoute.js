import express from "express";
import { Book } from "../bookModel.js";

/// router for routing

const router = express.Router();    

// Route for new book
router.post('/',async(request,response)=>{
    try{ // input validation 
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            })
        }
        const newbook = {
            title : request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const book = await Book.create(newbook);
        response.status(200).send(book);
        console.log(book);
    }
    catch(error){
        console.log(error.message);
    }
})

// Route for getting all ;
router.get("/",async (request,response)=>{
    try{
        const book = await Book.find({});
        
        return response.status(200).json({
            count: book.length,
            data:  book
        })  

    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message : error.message});
    }
})

// Route for getting One book
router.get("/:id",async (request,response)=>{
    try{
        const {id} = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);

    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message : error.message});
    }
})
// Route for updating a request

router.put("/:id",async (request,response)=>{
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
            ){
                return response.status(400).send({
                    message: 'Send all required fields: title, author, publishYear',
                })
            }
            const {id} = request.params;
            const result = await Book.findByIdAndUpdate(id,request.body);
            
            if(!result){
                response.status(404).send("book not found");
            }
            
            response.status(200).send("book updated ")
        }
        catch(error){
            console.log(error.message);
            response.status(500).send({message : error.message});
        }
    })
    
// for deleting a book from db
    router.delete("/:id",async (request,response)=>{
        try{
            const {id} = request.params;
            const book = await Book.findByIdAndDelete(id);
            return response.status(200).send("book deleted");
    
        }
        catch(error){
            console.log(error.message);
            response.status(500).send({message : error.message});
        }
    })

    export default router;