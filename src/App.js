
import './App.css';
import HomeComponentOne from './pages/home.componentOne/home.componentOne';
import HomecomponentThree from './pages/home.componentThree/HomecomponentThree';
import HomeComponentTwo from './pages/home.componentTwo/HomeComponentTwo';
import {
  Routes,
  Route,
} from "react-router-dom";
import {Fragment} from "react";
import Home from './pages/Home';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/pageone' element={ <HomeComponentOne/> }/>
        <Route path='/pagetwo' element={ <HomeComponentTwo/> }/>
        <Route path='/pagethree' element={ <HomecomponentThree/> }/>
      </Routes>
    </Fragment>
  );
}

export default App;
