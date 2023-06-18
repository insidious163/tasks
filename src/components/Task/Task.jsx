import { useState } from "react";
import { TaskTimeframe } from "@components/Task/TaskTimeframe/TaskTimeframe.jsx";
import { DropdownPicker } from "@ui/DropdownPicker/DropdownPicker.jsx";
import { TextPicker } from "@ui/TextPicker/TextPicker.jsx";
import { TIMEFRAMES } from "@/Constants.js";

import styles from "./Task.module.css";

const Task = () => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    executorId: "1",
    deadline: null,
    start: null,
    finish: null,
    timeframeType: "deadline",
  });

  const executors = [
    { name: "Me", id: "1" },
    { name: "Nikiana", id: "2" },
    { name: "Webb", id: "3" },
  ];

  const handleChangeField = (key) => (value) => {
    setTask((task) => {
      return {
        ...task,
        [key]: value,
      };
    });
  };

  const handleClick = () => {
    const { timeframeType, ...preparedTask } = task;

    if (timeframeType === TIMEFRAMES.deadline) {
      task.start = null;
      task.finish = null;
    } else {
      task.deadline = null;
    }
    alert("You clicked me! Task is :" + JSON.stringify({ task }));
  };

  return (
    <div className={styles.root}>
      <TextPicker
        lable="Name"
        value={task.name}
        onChange={handleChangeField("name")}
      />
      <TextPicker
        lable="Description"
        value={task.description}
        onChange={handleChangeField("description")}
      />
      <DropdownPicker
        label="Executor"
        options={executors}
        value="1"
        onChange={handleChangeField("executorId")}
      />
      <TaskTimeframe task={task} onChange={handleChangeField} />
      {/*here we will send it to the backend*/}
      <button onClick={handleClick}>Test</button>
    </div>
  );
};
export { Task };
