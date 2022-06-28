import { useEffect } from 'react';
import './App.css';
import { getAllLatestTodos,get } from './Redux/action';
import { useSelector,useDispatch} from 'react-redux'
import Home from './Components/Home';


function App() {
  const {data}=useSelector((store)=>store)
  console.log(data)
  const dispatch=useDispatch()

  useEffect(()=>{
    get(dispatch)
  },[])
  return (
    <div >
      <Home/>
    </div>
  );
}

export default App;
