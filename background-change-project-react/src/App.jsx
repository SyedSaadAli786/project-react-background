import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setColor] = useState("yellow")

  return (
   
    
    <div className=' w-full h-screen duration-200 ' 
    style={{backgroundColor: color}}    >

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-02 ' >

        <div  className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 
        py-2 rounded-xl  '> 
        <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg  '
        style={{backgroundColor: "red"}}>red</button>
          
        <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg  '
        style={{backgroundColor: "green"}}>green</button>
        
       
        <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg  '
        style={{backgroundColor: "blue"}}>blue</button>

        <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg  '
        style={{backgroundColor: "pink"}}>pink</button>

        <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg  '
        style={{backgroundColor: "orange"}}>orange</button>

        <button onClick={() => setColor("gray")} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg  '
        style={{backgroundColor: "gray"}}>gray</button>

        <button onClick={() => setColor("Lime")} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg  '
        style={{backgroundColor: "Lime"}}>Lime</button>

        <button onClick={() => setColor("LightBlue")} className='outline-none px-4 py-1 rounded-full
         text-white shadow-lg  '
        style={{backgroundColor: "LightBlue"}}>LightBlue</button>
         
          </div> 

      </div>
    </div>
     
       
  )
}

export default App
