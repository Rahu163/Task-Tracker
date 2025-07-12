const Task=({task,onToggle,onDelete})=>{
    return(
        <div className={`task ${task.completed ? "done":""}`}>
            <span onClick={()=>onToggle(task.id)}>{task.text}</span>
            <button onClick={()=>onDelete(task.id)}>❌</button>
        </div> 
    )
}
export default Task;