import { Counter, Table } from "./components";
import logo from "./logo.svg";
import "./App.css";

const App = () =>{
  const datos = [
    {
        nombre: "Pepe",
        apellido: "Suarez",
        celular: "4564656",
        correo:"bazinga",
    },
    {
        nombre: "Juan",
        apellido: "Suarez",
        celular: "4564656",
        correo:"bazinga",
    },
    {
        nombre: "Felipe",
        apellido: "Suarez",
        celular: "4564656",
        correo:"bazinga",
    }
]

  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>Hello Vite + React!</p>
        <Counter sumar={"Texto para sumar"} restar={"Texto para restar"} />
        <Table datos={datos}/>
      </header>
    </div>
  )
}


export default App;
