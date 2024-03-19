import React,{useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import BackButton from '../components/BackButton';


function Delete() {
    const {id} = useParams();
  
    const navi= useNavigate();



    function del(){
        axios.delete(`http://localhost:5555/books/${id}`)
        .then(()=>{
           alert("deleted")
            navi('/')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='w-screen h-dvh   flex  items-center justify-center '>

      <div className='w-2/4 h-2/5 pt-7 bg-del rounded-lg flex-row justify-items-center items-center  '>

        <div className='w-full h-25   flex justify-center items-end  '>
          <BackButton/>
        </div>
        <div className='w-full h-17 text-xl font-bold mt-5 flex justify-around items-center p-8 '>
          <p> Do You want to Delete this or not ?</p>
        
        </div>
        <div className='w-full h-15 text-xl  flex justify-around items-center p-8 '>
        
            <button id='btn' className='font-semibold text-white font-bold py-2 px-4 rounded ' type='submit' onClick={del}>Yes</button>
            <button id='btn' className='font-semibold text-white font-bold py-2 px-4 rounded ' onClick={()=>{navi('/')}}>No</button>
        </div>

      </div>
    </div>
  )
}

export default Delete
