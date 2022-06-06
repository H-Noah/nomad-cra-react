import {useState, useEffect} from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (e) => 
  {
    setKeyword(e.target.value);
  }
  const onClick = () => 
  {
    setValue((prev) => prev +1);
  }
  console.log('run all times');  
  useEffect( () =>
  {
    console.log('i run only once');
  }, []);  
  useEffect( () =>
  {    
    console.log("i run when keyword changes");        
  }, [keyword]);  

  useEffect( () =>
  {
    console.log('i run when counter changes');
  }, [counter]);  

  return (
    <div className="App">
      <input 
        onChange ={onChange} 
        value = {keyword}
        type ="text" 
        placeholder="Search here..."
      />
      <h1> {counter} </h1>
      <button onClick ={onClick}>clickMe</button> 
    </div>
  );
}

export default App;
