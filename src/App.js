import Button from "./Button";
import stylesApp from "./App.module.css";


function App() {
  return (
    <div className="App">
      <h1 className={stylesApp.title}>Welcome back</h1>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
