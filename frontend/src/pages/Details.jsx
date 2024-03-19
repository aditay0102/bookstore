import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton'

function details() {
  const[book,setBook] = useState({});
  const[loading,SetLoading] = useState(false)
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response)=>{
      setBook(response.data)
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])


  return (
    <div className='w-screen h-dvh   flex  items-center justify-center '>

      <div className='w-2/4 h-3/5 p-3 bg-slyellow  rounded-lg flex-row justify-items-center items-center  '>

        <div className='w-full h-11   flex justify-between items-center p-8 '>
          <div className='font-bold'>Title</div>
          <div>{book.title}</div>
        </div>
        <div className='w-full h-11  flex justify-between items-center p-8 '>
          <div className='font-bold' >Author</div>
          <div>{book.author}</div>
        </div>
        <div className='w-full h-11   flex justify-between items-center p-8 '>
          <div className='font-bold' >PublishYear</div>
          <div>{book.publishYear}</div>
        </div>
        <div className='w-full h-11   flex justify-between items-center p-8 '>
          <div className='font-bold' >Created At</div>
          <div>{book.createdAt}</div>
        </div>
        <div className='w-full h-11   flex justify-between items-center p-8 '>
          <div className='font-bold' >Updated At</div>
          <div>{book.updatedAt}</div>
        </div>
        <div className='w-full h-5  flex justify-center items-start  '>
          <BackButton/>
          
        </div>

      </div>
      
    </div>
  )
}

export default details
