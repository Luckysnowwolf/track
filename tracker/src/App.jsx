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

  function addTask(){
    let taskName = tasksRef.current.value
    let id = math.floor(math.random()*10000)
    if (taskName === '') return alert('please add a task')

      setTasks(prevTodos => {
        return[...tasks, {id:id, name:taskName, complete:false}]
      })
      tasksRef.current.value = null

  }
  function toggleTask(id){
    const newTasks = [...tasks]
    const task =newTasks.find(task => task.id === id)
    task.complete = !task.compete
    setTasks(newTasks)
  }
  function removeTasks(){
    const newTasks = tasks.filter(task => !task.compete)
    setTasks(newTasks)
  }
  function removeAllTasks(){
    setTasks([])
  }
  function clearStorage(){
    localStorage.clear()
    alert('storage has been cleared, reload page to see')
  }
  return(
    <div className="container">
      <h1 className='poject-tile'>Task Tracker</h1>
      {
        tasks.length == 0 ? '': <h1 className='total-tasks'>{tasks.filter(task => !task.compete).length} left to do</h1>
      }

    <input className = "input-field" ref ={tasksRef} placeholder = "Add Task..."/>
    <Button bgColor="green" textColor="white" onClick = {addTask} text="add Task" bottom ='97px' right ='95px'></Button>
    <Button bgColor="yellow" textColor="white" onClick = {removeTasks} text="remove task" bottom ='79px' right ='95px' padding='10px'></Button>
    <Button bgColor="red" textColor="white" onClick = {removeAllTasks} text="Delete all tasks" bottom ='79px' right ='95px'></Button>
    <Button bgColor="darkred" textColor="white" onClick = {clearStorage} text="clear storage" bottom ='79px' right ='95px'></Button>
    {tasks.length > 0 ? <TaskList tasks = {tasks} toggleTask={toggleTask} /> : 'no tasks to show' }
    </div>
  )

}

export default App
