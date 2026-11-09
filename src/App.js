import { useState } from "react";
import "./App.css"

function App() {

  const[count , setCount] = useState(0);
  const[input, setInput] = useState("");
  const [list, setList] = useState([]);

const onChangeInput = (e) => {
  const inputValue = e.target.value;
   setInput(inputValue);
}

  const onClickListAdd = () => {
    if(!input.trim()) return;
     setList([...list, input]);
    setInput("");
 setCount(count+1);
  }

const onKeyEntered = (e) => {
  if(e.key==="Enter") onClickListAdd();
}

  return (
    <div >
   <input onKeyDown={onKeyEntered} placeholder="new task" onChange={onChangeInput} type="text" value={input}/>
   <h1>{count}</h1>
   <ul>
    {list.map((e,i)=><li key={i}>{e}</li>)}
   </ul>
<button onClick={onClickListAdd}>Add TO DO</button>
    </div>
  );
}

export default App;
