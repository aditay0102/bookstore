import React,{useState} from 'react'
import BackButton from '../components/BackButton'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create() {
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [year,setYear] = useState();

    const navigate = useNavigate();

    function handleSave(){
        const data = {
            title : title,
            author : author,
            publishYear : year,
        };
        axios.post('http://localhost:5555/books', data)
        .then(() =>{
            alert("created")
            navigate("/")
        })
        .catch((error)=>{
            alert(error)
            console.log(data)
        })
        
    }

  return (
    <div className='w-screen h-dvh   flex  items-center justify-center '>

    <div className='w-2/4 h-2/4 pt-8 bg-create rounded-lg flex-row justify-items-center items-center  '>

      <div className='w-full h-15   flex justify-center items-end  '>
        <BackButton/>
      </div>
      <div className='w-full h-12   flex justify-between items-center p-8 '>
        <div className='font-bold'>Title</div>
        <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}} />   
      </div>
      <div className='w-full h-12  flex justify-between items-center p-8 '>
        <div className='font-bold' >Author</div>
        <input type='text' value={author} onChange={(e)=>{setAuthor(e.target.value)}} />   
      </div>
      <div className='w-full h-12   flex justify-between items-center p-8 '>
        <div className='font-bold' >PublishYear</div>
        <input type='Number'  value={year} onChange={(e)=>{setYear(e.target.value)}} />   
      </div>
      
      <div className='w-full h-15   flex justify-center items-end  '>
        <button id='btn' className=' text-white font-bold py-2 px-4 rounded' onClick={handleSave} > submit</button>
       
      </div>

    </div>
    
  </div>
  )
}

export default Create
