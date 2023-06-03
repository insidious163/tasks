import React from "react";
import DropdownPicker from "../../../ui/DropdownPicker/DropdownPicker";

const TaskExecutor = ({setValueInTask}) => {
    // get list from backend
    const executors = [
        {name: 'Me', id: '1'},
        {name: 'Nikiana', id: '2'},
        {name: 'Webb', id: '3'},
    ];

    const setExecutorInTask = (value) => {
        setValueInTask("executor", value)
    };

    return (
        <div className="Executor">
            <DropdownPicker title="Executor" values={executors} setFunction={setExecutorInTask}/>
        </div>
    )
}

export default TaskExecutor;