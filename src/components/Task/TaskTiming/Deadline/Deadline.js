import React from "react";
import DateTimePicker from "../../../../ui/DateTimePicker/DateTimePicker";

const Deadline = ({setValueInTask, deadline, setDeadline}) => {

    const setDeadlineInTask = (value) => {
        setValueInTask("deadline", value);
        setDeadline(value);
    };

    return (
        <div className="Deadline">
            <DateTimePicker title="Deadline" initValue={deadline} setFunction={setDeadlineInTask}/>
        </div>
    )
}

export default Deadline;