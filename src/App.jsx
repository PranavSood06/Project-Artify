import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Section_1 from './Components/Section_1/Section_1'
function App() {
  const [paginate,setpaginate] = useState(true);
  return (
    <>
      <Navbar paginate={paginate} setpaginate={setpaginate}/>
      <div className="pt-13">
        <Section_1 paginate={paginate}/> 
      </div>
    </>
  )
}

export default App
