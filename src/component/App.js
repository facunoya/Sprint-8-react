import TodosLosProductos from "./TodosLosProductos";
import TodosLosUsuarios from "./TodosLosUsuarios";
import "../css/style.css"

function App() {
  return (
    <>
    <div className="productos">
      <TodosLosProductos />
      
    </div>
    <div className ="usuarios">
      <TodosLosUsuarios/>
    </div>
    
    </>
  );
}

export default App;



    

