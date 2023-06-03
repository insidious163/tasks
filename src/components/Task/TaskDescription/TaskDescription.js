import React from "react";
import TextPicker from "../../../ui/TextPicker/TextPicker";

const TaskDescription = ({setValueInTask}) => {
    const setDescriptionInTask = (value) => {
        setValueInTask("description", value)
    };

    return (
        <div className="Description">
            <TextPicker title="Description" setFunction={setDescriptionInTask}/>
        </div>
    )
};

export default TaskDescription;