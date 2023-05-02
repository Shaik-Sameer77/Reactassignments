import React,{ useState } from 'react';
import './App.css';

function App() {

  const [image , setImage] = useState(getDog)

  async function getDog () {

    try{
        
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json()
        setImage(data.message)
    }
    catch(error){
      console.log('i am from catch' ,error)
    }
  }

  return (
    <div className="App">
       <h1>Dog Images</h1>
      <img 
        src={image}
        alt='dog image'
      />


    </div>
  );
}

export default App;


