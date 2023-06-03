import React, {useState} from "react";
import TaskName from "./TaskName/TaskName";
import TaskDescription from "./TaskDescription/TaskDescription";
import TaskExecutor from "./TaskExecutor/TaskExecutor";
import TaskTiming from "./TaskTiming/TaskTiming";

const Task = () => {
    const [task, setTask] = useState('');

    const setValueInTask = (key, value) => {
        setTask((task) => {
            return {
                ...task,
                [key]: value,
            };
        });
    };

    const handleClick = () => {
        alert('You clicked me! Task is :' + JSON.stringify({task}));
    }

    return (
        <div className="Task">
            <TaskName setValueInTask={setValueInTask}/>
            <TaskDescription setValueInTask={setValueInTask}/>
            <TaskExecutor setValueInTask={setValueInTask}/>
            <TaskTiming setValueInTask={setValueInTask}/>
            {/*here we will send it to the backend*/}
            <button onClick={handleClick}>Test</button>
        </div>
    );
}

export default Task;