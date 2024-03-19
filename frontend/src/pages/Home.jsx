import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link , useNavigate    } from 'react-router-dom';



function Home() {
    const [books,setBooks] = useState([]);
    const [id,seId] = useState();
  useEffect(()=>{
      axios.get("http://localhost:5555/books")
      .then((response)=>{
        setBooks(response.data.data.reverse());
        console.log(books)
      
      })
      .catch((error)=>{
        console.log(error)
        
      })
      
    },[])

 


  return (
    <div id='home' className='w-screen  flex justify-center items-center '>
      <div className=' w-2/3 flex-col justify-center'>

          <h1 id="Maintitle" className="mt-8 flex bg-red-600 text-3xl font-bold  justify-center" >Book list </h1> 
          
            <Link to='/books/create ' className=' mt-8 title  flex  justify-center items-center font-bold'  >
             <span>Add Book</span> <p className='text-xl font-bold'><i class="fa-solid fa-plus"></i></p>
            </Link>
          <div id="tbl" className=' tbl  p-7 flex justify-center'>
            {
              <table  className=' w-screen p-8'>
                <thead  >
                  <tr className='text-l'>
                    <td className='font-bold'>No</td>
                    <td className='font-bold'>Title</td>
                    <td className='font-bold'>Author</td>
                    <td className='self center font-bold'>PublishYear</td>
                    <td className='flex justify-center font-bold' >Operations</td>
                  </tr>
                
                </thead>
                <tbody className='p-8 text-l' >
                  {
                    books.map((book,index) =>(

                    <tr key={book._id}>
                      <td  >{index + 1}</td>
                      <td  >{book.title}</td>
                      <td  >{book.author}</td>
                      <td className=' justify-around' >{book.publishYear}</td>
                      <td className='flex justify-around h-24 items-center'  >
                        <Link to={`books/details/${book._id}`}> <i class="fa-solid fa-circle-info"></i> </Link>
                        <Link to={`books/edit/${book._id}`}> <i class="fa-solid fa-pen-to-square"></i> </Link>
                        <Link to={`books/delete/${book._id}`}> <i class="fa-solid fa-trash"></i> </Link>
                      </td>
                    </tr>

                    ))
                  }
                  
                </tbody>
              </table>
            

            }
          </div>
        </div>
      </div>
  )
}

export default Home
