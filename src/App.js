import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";


function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Routes>
      
      
      <Route path="/" element={<Home />}/>

      </Routes>
      
      
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
