import './App.css';
import Button from './components/button/Button';
import Example from './components/example/example';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import { useEffect, useState } from 'react';
import CountPage from './page/countPage/CountPage';
import Input from './components/input/Input';
import ToDoList from './components/toDoList/ToDoList';
import Users from './page/users/Users';

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

  const[tasks, setTasks]=useState([])

  const handleAdd=()=>{
    tasks.push(
      {
        id:tasks.length===0 ? 1 : tasks[tasks.length-1].id+1,
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
  //   localStorage.setItem('user', 'UIN')
  //   localStorage.setItem('age', '23')
  // }, [])

  useEffect(()=>{
    const myLocalList=JSON.parse(localStorage.getItem('tasks'))
    if (myLocalList===null){
      return localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    if (myLocalList.length!==0){
      setTasks(myLocalList)
    }
  }, [])
  
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [users, setUsers]=useState([])
  const getUsers=async()=>{
    const data=await fetch('https://jsonplaceholder.org/users')
    const users=await(data.json())
    setUsers(users)
  }
  
  const handleClear=()=>{
    localStorage.setItem('tasks', [])
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
      <button onClick={handleClear}>clear</button>
      <button onClick={getUsers}>getApi </button>
      <ToDoList tasks={tasks} handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit}/>
      <Users users={users}/>
    </>
  );
}

export default App;
