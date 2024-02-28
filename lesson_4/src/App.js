import './App.css';
import Button from './components/button/Button';
import User from './components/user/User';
import Example from './components/example/example';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import { useEffect, useState } from 'react';
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
  }]  
 )

  const handleAdd=()=>{
    tasks.push(
      {
        id:tasks.length+1,
        title: input,
        completed: false
      }
    )
  }
  const handleDone=(id)=>{
    tasks.map(task=>{
      if(task.id===id){
        return task.completed=!task.completed
      }
      return tasks
    })
    setTasks([...tasks])
  }
  const handleEdit=(editTodo)=>{
    tasks.map(task=>{
      if (task.id===editTodo.id)
      return task.title=editTodo.title
    })
    setTasks(tasks)
  }
  const handleDelete=(id)=>{
    const deleted=tasks.filter(task=>task.id!==id)
    setTasks(deleted)
  }

// useEffect(()=>{
//   console.log('useEffect');
//   }, [show])
  

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
      <ToDoList tasks={tasks} handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit}/>
    </>
  );
}

export default App;
