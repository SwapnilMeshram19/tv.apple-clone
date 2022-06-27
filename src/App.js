import { useEffect } from 'react';
import './App.css';
import { getAllLatestTodos,get } from './Redux/action';
import { useSelector,useDispatch} from 'react-redux'


function App() {
  const {data}=useSelector((store)=>store)
  console.log(data)
  const dispatch=useDispatch()

  useEffect(()=>{
    get(dispatch)
  },[])
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
