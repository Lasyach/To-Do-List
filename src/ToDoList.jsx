import React, {useState} from 'react'
function ToDoList()
{
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event)
    {
        setNewTask(event.target.value);
    }

    function handleRemoveTask(index)
    {
        setTasks(t => t.filter((_, i) => 
        i !== index));
    }

    function handleAddTask()
    {
        if(newTask !== "")
        {
            setTasks(t => [...tasks, newTask]);
            setNewTask("");
        }
    }

    function handleMoveUp(index)
    {
        if(index>0)
        {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]]=[updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function handleMoveDown(index)
    {
        if(index < tasks.length-1)
        {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]]=[updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(<div className="to-do">
        <p className="heading">To-Do List</p>
        <div>
            <input placeholder="Enter a task" value={newTask} onChange={handleInputChange} className='input'></input>
            <button onClick={() => handleAddTask()} className='add'>Add</button>
        </div>
        <ol className='list'>
            {tasks.map((task, index) => <li key={index} className='list-item'>
                    <span className='task'>{task}</span>
                    <button className='Delete' onClick={() => handleRemoveTask(index)}>Delete</button>
                    <button className='Up' onClick={() => handleMoveUp(index)}>Move Up</button>
                    <button className='Down' onClick={()=> handleMoveDown(index)}>Move Down</button>
                    </li>)}
        </ol>
        
    </div>);
}

export default ToDoList