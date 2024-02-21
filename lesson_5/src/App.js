import './App.css';
import Button from './components/button/Button';
import User from './components/user/User';
import Example from './components/example/example';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import { useState } from 'react';
import CountPage from './page/countPage/CountPage';
import Input from './components/input/Input';
import ToDoList from './components/toDoList/ToDoList';

function App() {
  const navbar=['home', 'about us', 'contacts']; 
  const [show, setShow]=useState(false)

  const handleShow=()=>{
    setShow(!show)
  }
  const [input, setInput]=useState('');

  const onChangeInput=(event)=>{
    setInput(event.target.value)
  }

  const[tasks, setTasks]=useState([
  {
    id:1 ,
    title: 'coding',
    completed: false
  },
  {
      id:2,
      title: 'eat',
      completed: false
  },
  {
      id:3,
      title: 'sleep',
      completed: false
  }])

  const handleAdd=()=>{
    tasks.push(
      {
        id:tasks.length+1,
        title: input,
        completed: false
      }
    )
  }
  const handleDelete=(id)=>{
    console.log(id);
  }

  

  return (
    <>
      {
        show && <Modal handleShow={handleShow}>
          <Input placeholder={'enter text'} onChangeInput={onChangeInput}/>
          <button onClick={handleShow}>close</button>
          <Button onClick={handleAdd} text={'enter'}/>
        </Modal>
      }
      <button onClick={handleShow}>open</button>
      <ToDoList tasks={tasks} handleDelete={handleDelete}/>
    </>
  );
}

export default App;
