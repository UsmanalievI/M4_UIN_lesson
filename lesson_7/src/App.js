import './App.css';
import PokemonPage from './page/pokemonPage/PokemonPage';
import CountPage from './page/countPage/CountPage';
import Users from './page/users/Users.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menu from './components/menu/Menu.js';
import UserInfo from './page/userInfo/UserInfo.js';
import FormPage from './page/formPage/FormPage.js';
import PokemonInfo from './page/pokemonInfo/PokemonInfo.js';

function App() {
  
  
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<PokemonPage/>}/>
        <Route path='/count' element={<CountPage/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<UserInfo/>}/>
        <Route path='/form' element={<FormPage/>}/>
        <Route path='/pokemon/:id' element={<PokemonInfo/>}/>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
