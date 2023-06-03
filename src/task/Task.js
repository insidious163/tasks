import React, {useState} from "react";

const DateTimePicker = ({title, setFunction}) => {
    const [selectedDateTime, setSelectedDateTime] = useState('');

    const handleDateTimeChange = (event) => {
        setSelectedDateTime(event.target.value);
        setFunction(event.target.value);
    };

    return (
        <div className="DateTimePicker">
            <h2>{title}</h2>
            <input
                type="datetime-local"
                value={selectedDateTime}
                onChange={handleDateTimeChange}
            />
        </div>
    );
}

const StartAndFinish = ({setValueInTask}) => {
    const setStartInTask = (value) => {
        setValueInTask("start", value)
    };
    const setFinishInTask = (value) => {
        setValueInTask("finish", value)
    };

    return (
        <div className="StartAndFinish">
            <DateTimePicker title="Start" setFunction={setStartInTask}/>
            <DateTimePicker title="Finish" setFunction={setFinishInTask}/>
        </div>
    )
}

const Deadline = ({setValueInTask}) => {
    const setDeadlineInTask = (value) => {
        setValueInTask("deadline", value)
    };

    return (
        <div className="Deadline">
            <DateTimePicker title="Deadline" setFunction={setDeadlineInTask}/>
        </div>
    )
}

const TaskTiming = ({setValueInTask}) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
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
                {selectedOption === "deadline" && <Deadline setValueInTask={setValueInTask}/>}
                {selectedOption === "startAndFinish" && <StartAndFinish setValueInTask={setValueInTask}/>}
            </dev>
        </div>
    )
}

const TextPicker = ({title, setFunction}) => {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
        setFunction(event.target.value);
    };

    return (
        <div className="Text">
            <h2>{title}</h2>
            <input
                type="text"
                value={text}
                onChange={handleTextChange}
            />
        </div>
    );
}

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

const TaskDescription = ({setValueInTask}) => {
    const setDescriptionInTask = (value) => {
        setValueInTask("description", value)
    };

    return (
        <div className="Description">
            <TextPicker title="Description" setFunction={setDescriptionInTask}/>
        </div>
    )
}


const DropdownPicker = ({title, values, setFunction}) => {
    const [selectedOption, setSelectedOption] = useState('1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setFunction(event.target.value);
    };

    return (
        <div>
            <h2>{title}</h2>
            <select value={selectedOption} onChange={handleOptionChange}>
                {values.map((value) => (
                    <option key={value.id} value={value.id}>{value.name}</option>
                ))}
            </select>
        </div>
    );
};

const TaskExecutor = ({setValueInTask}) => {
    // get list from backend
    const executors = [
        {name: 'Me', id: 1},
        {name: 'Nikiana', id: 2},
        {name: 'Webb', id: 3},
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
            <button onClick={handleClick}>Test</button>
        </div>
    );
}

export default Task;