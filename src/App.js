import {useState, useEffect} from "react";



function App() {

  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  console.log(toDo);

  return (
    <div>
      <form>
        <input onChange={onChange} 
        value = {toDo} 
        type = "text" 
        placeholder="Write your to do..." />
        
        <button>
          Add to Do
        </button>

      </form>
      
          
    </div>
  );
}

export default App;
