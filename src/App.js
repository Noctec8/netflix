import './App.css';
import { categories } from './api';
import Row from './Comandos/Row';


function App() {
  return (
    <div>
      {/* Navbar */}
      {/* Banner */}
      {/* Categorias - Linhas */}
      {/* <Navbar/>
      <Banner/> */}
      {categories.map( (category) => {
        return <Row 
                  key={category.name}
                  title={category.title}
                  isLarge={category.isLarge}
                  path={category.path}
                />
      })}
    </div>
  );
}

export default App;