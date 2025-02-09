import './App.css'
import React from 'react'
import { useState,useRef, useEffect } from 'react'
import TaskList from "./component/taskList.jsx"
import Button from "./component/Button.jsx"

const LOCAL_STORAGE_KEY ="todoapp.todos"
function App() {
  const [tasks, setTasks] = useState([])
  const tasksRef = useRef()

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTasks) setTasks(storedTasks)

    }, [])

  useEffect(() => (
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  ), (tasks))

  function addTasks(){
    let taskName = tasksRef.current.value
    let id = Math.floor(Math.random()*10000)
    if (taskName === '') return alert('please add a task')

      setTasks(prevTodos => {
        return[...tasks, {id:id, name:taskName, complete:false}]
      })
      tasksRef.current.value = null

  }
  function toggleTask(id){
    const newTasks = [...tasks]
    const task =newTasks.find(task => task.id === id)
    task.complete = !task.complete
    setTasks(newTasks)
  }
  function removeTasks(){
    const newTasks = tasks.filter(task => !task.complete)
    setTasks(newTasks) 
    alert("task removed")
  }
  function removeAllTasks(){
    setTasks([])
    alert("deleted all remaining tasks")
  }
  function clearStorage(){
    localStorage.clear()
    alert('storage has been cleared, reload page to see')
  }
  return(
    <div className="container">
      <h1 className='poject-tile'>Task Tracker</h1>
      {
        tasks.length == 0 ? '': <h1 className='total-tasks'>{tasks.filter(task => !task.complete).length} left to do</h1>
      }

    <input className = "input-field" ref ={tasksRef} placeholder = "Add Task..."/>
    <Button bgColor="green" textColor="white" onClick = {addTasks} text="Add Task" bottom ='97px' right ='95px'display="" margin="10px"></Button>
    <Button bgColor="orange" textColor="white" onClick = {removeTasks} text="Remove task" bottom ='79px' right ='95px' padding='10px'display="" justifyContent="" justifyItems="" flexDirection="" margin="10px" gridColumnEnd="" gridColumnStart=""></Button>
    <Button bgColor="red" textColor="white" onClick = {removeAllTasks} text="Delete all tasks" bottom ='79px' right ='95px'display="" margin="10px"></Button>
    <Button bgColor="darkred" textColor="white" onClick = {clearStorage} text="Clear storage" bottom ='79px' right ='95px'display="" margin="10px"></Button>
    {tasks.length > 0 ? <TaskList tasks = {tasks} toggleTask={toggleTask} className="taskText"/> : 'No tasks to show' }
    </div>
  )
}

export default App
