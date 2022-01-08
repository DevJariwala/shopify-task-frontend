import {useEffect, useState} from 'react'
import {CircularProgress,Icon} from '@material-ui/core'

import './App.css';
import Details from './Details';

function App() {

  const [data, setData] = useState([])

  const fetchData = async ()=>{
    await fetch('https://api.nasa.gov/planetary/apod?count=15&&api_key=RYD8eWfCCFRPUrBrQtbY5qbFURe7A6hOO5hZkoaD').then((response)=>response.json()).then((d)=>setData(d))
  }

  useEffect(() => {
    fetchData();
  }, [])
 

  return (
    <div className="App">

      <div className="app__navbar">
        <p className='app__heading'>Spacestagram</p>
      </div>

      {
        data.length===0 && 
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'80px'}}>
          <CircularProgress />
        </div>
      }
      
      <div className='app_cnt'>
        {
          data.map((item,idx)=>(
            <div key={idx} className='app__container'>
              <Details item={item} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
