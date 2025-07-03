import Input from './components/Input';
import Card from './components/Card';
import Tasks from './components/Tasks';
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './components/about';
import Navbar from './components/navbar';
function App() {
  

  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          <h1>My React App</h1>
          <h2>This is my first application</h2>
          </header>
          <Navbar></Navbar>
          <main>
            <Routes>
              <Route path="/" element={<Tasks/>}/>
              <Route path="/about" element={<About />}/>
            </Routes>
          </main>
          
     </div>   
    </BrowserRouter>
  );
}

export default App
