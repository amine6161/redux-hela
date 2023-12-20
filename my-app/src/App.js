import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './Components/Counter';
import { handleShow } from './Redux/Actions';

function App() {
  const show = useSelector(state=>state.show)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=> dispatch(handleShow())}>{show ? "Hide" : "Show" }</button>
      {
        show && <Counter/>
      }
    </div>
  );
}

export default App;
