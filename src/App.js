import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment, decrement} from './actions';



function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div style={{textAlign:"center", border:"1px solid #ddd", height:"300px", backgroundColor:"#dddd",fontFamily:"italic"}}>
        <h1>Counter {counter}</h1>
        <button style={{width:"50px", backgroundColor:"#3ee8c8",borderRadius:'5px' ,border:'0px ',marginRight:'10px'}} onClick={() => dispatch(increment())}>+</button>
       
        <button style={{width:"50px", backgroundColor:"#e83c3c",borderRadius:'5px' ,border:'0px '}}onClick={() => dispatch(decrement())}>-</button>
        {isLogged ? <h3>Valuable information i shouldn't see</h3> : '' }
    </div>
  );
}

export default App;
