import Task from './Task'

//When using map function, the JSX in the function should have a key attribute
// because its treated as a list

const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return (
        <>
        {tasks.map((task) => (
            <Task key={task.id} task={task}
            onDelete={onDelete} onToggle={onToggle}/>
        ))}
        </>
    )
}

export default Tasks
