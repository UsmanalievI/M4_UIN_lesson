import './App.css';
import Button from './components/button/Button';
import User from './components/user/User';
import Example from './components/example/example';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import { useState } from 'react';
import CountPage from './page/countPage/CountPage';
import Input from './components/input/Input';

function App() {
  const navbar=['home', 'about us', 'contacts']; 
  const [show, setShow]=useState(false)

  const handleShow=()=>{
    setShow(!show)
  }
  const [input, setInput]=useState('')
  const onChangeInput=(event)=>{
    console.log(event.target.value);
    setInput(event.target.value)
  }

  return (
    <>
      {
        show && <Modal handleShow={handleShow}></Modal>
      }
      <button onClick={handleShow}>open</button>

      <CountPage/>
      <p>{input}</p>
      <Input type={'password'} placeholder={'write your pass'} onChangeInput={onChangeInput}/>
    </>
  );
}

export default App;
