import React from "react";
import TextPicker from "../../../ui/TextPicker/TextPicker";

const TaskName = ({setValueInTask}) => {
    const setNameInTask = (value) => {
        setValueInTask("name", value)
    };

    return (
        <div className="Name">
            <TextPicker title="Name" setFunction={setNameInTask}/>
        </div>
    )
}

export default TaskName;