import React from "react"
import '../App.css'

const Task = ({task, toggleTask, onToggle}) => {
    function handleToggleTask(){
        toggleTask(task.id)
    }
    return(
        <div className="task-component">
            <input type = "checkBox" checked = {task.complete} onChange = {handleToggleTask} onDoubleClick={onToggle}/>
            {task.name}
        </div>
    )
}

export default Task