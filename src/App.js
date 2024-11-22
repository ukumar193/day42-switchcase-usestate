import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Crickethook from './components/Crickethook';
import Stateselector from './components/Stateselector';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter  future={{
       v7_startTransition: true,v7_relativeSplatPath: true
       }}>
      <Routes>
        <Route path='/'element={<Crickethook/>}></Route>
        <Route path='/login'element={<Stateselector/>}></Route>
      </Routes>
      </BrowserRouter> 
   
     
    </div>
  );
}

export default App;
