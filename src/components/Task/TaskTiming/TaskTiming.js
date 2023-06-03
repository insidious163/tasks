import React, {useState} from "react";
import Deadline from "./Deadline/Deadline";
import StartAndFinish from "./StartAndFinish/StartAndFinish";


const TaskTiming = ({setValueInTask}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [deadline, setDeadline] = useState('');
    const [start, setStart] = useState('');
    const [finish, setFinish] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        if (event.target.value === "deadline") {
            setValueInTask("deadline", deadline);
            setValueInTask("start", null);
            setValueInTask("finish", null);
        } else {
            setValueInTask("deadline", null);
            setValueInTask("start", start);
            setValueInTask("finish", finish);
        }
    };

    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="deadline"
                    checked={selectedOption === "deadline"}
                    onChange={handleOptionChange}
                />
                Deadline
            </label>
            <label>
                <input
                    type="radio"
                    value="startAndFinish"
                    checked={selectedOption === "startAndFinish"}
                    onChange={handleOptionChange}
                />
                Start and finish
            </label>
            <dev>
                {selectedOption === "deadline" &&
                    <Deadline setValueInTask={setValueInTask} deadline={deadline} setDeadline={setDeadline}/>}
                {selectedOption === "startAndFinish" &&
                    <StartAndFinish setValueInTask={setValueInTask} start={start} finish={finish} setStart={setStart} setFinish={setFinish}/>}
            </dev>
        </div>
    )
}

export default TaskTiming;