import React from "react";
import DateTimePicker from "../../../../ui/DateTimePicker/DateTimePicker";

const StartAndFinish = ({setValueInTask, start, setStart, finish, setFinish}) => {
    const setStartInTask = (value) => {
        setValueInTask("start", value);
        setStart(value);
    };
    const setFinishInTask = (value) => {
        setValueInTask("finish", value);
        setFinish(value);
    };

    return (
        <div className="StartAndFinish">
            <DateTimePicker title="Start" initValue={start} setFunction={setStartInTask}/>
            <DateTimePicker title="Finish" initValue={finish} setFunction={setFinishInTask}/>
        </div>
    )
}

export default StartAndFinish;