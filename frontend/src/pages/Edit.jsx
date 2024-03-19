import {useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';

function Edit() {
   const[newtitle,SetnewTitle] = useState("");
   const[newauthor,setNewAuthor] = useState("");
   const[newyear,setNewYear] = useState(0);
   const nevigate = useNavigate();
   const {id} = useParams();
   
   
   useEffect(()=>{
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response)=>{
      SetnewTitle(response.data.title);
      setNewAuthor(response.data.author);
      setNewYear(response.data.publishYear);
     
    })
    .catch((error)=>{
      console.log(error)
    })
  },[]);

  function handleUpdate(){
    const newdata = {
      title : newtitle,
      author :  newauthor,
      publishYear :  newyear,
    };

    axios.put(`http://localhost:5555/books/${id}`,newdata)
    .then(()=>{
      alert("updated");
      nevigate('/')
    })
    .catch((error)=>{
      alert(error)
      console.log(id) 
    })
  }

  return (
    <div className='w-screen h-dvh   flex  items-center justify-center '>

      <div className='w-2/4 h-2/4 pt-8 bg-edit rounded-lg flex-row justify-items-center items-center  '>

        <div className='w-full h-15   flex justify-center items-end  '>
          <BackButton/>
        </div>
        <div className='w-full h-12   flex justify-between items-center p-8 '>
          <div className='font-bold'>Title</div>
          <input type='text' value={newtitle} onChange={(e)=>{SetnewTitle(e.target.value)}} />   
        </div>
        <div className='w-full h-12  flex justify-between items-center p-8 '>
          <div className='font-bold' >Author</div>
          <input type='text' value={newauthor} onChange={(e)=>{setNewAuthor(e.target.value)}} />   
        </div>
        <div className='w-full h-12   flex justify-between items-center p-8 '>
          <div className='font-bold' >PublishYear</div>
          <input type='Number'  value={newyear} onChange={(e)=>{setNewYear(e.target.value)}} />   
        </div>
        
        <div className='w-full h-15   flex justify-center items-end  '>
          <button id='btn' className=' text-white font-bold py-2 px-4 rounded' onClick={handleUpdate} > Update</button>
        
        </div>

      </div>
    </div>
  )
}

export default Edit
