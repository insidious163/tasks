import { RadioGroup } from "@ui/RadioGroup/RadioGroup.jsx";
import { DateTimePicker } from "@ui/DateTimePicker/DateTimePicker.jsx";
import { TIMEFRAMES } from "@components/Task/Constants.js";

import styles from "./TaskTimeframe.module.css";

const TIMEFRAME_OPTIONS = [
  { value: TIMEFRAMES.deadline, label: "Deadline" },
  { value: TIMEFRAMES.period, label: "Period" },
];
const TaskTimeframe = ({ task, onChange }) => {
  return (
    <div className={styles.root}>
      <RadioGroup
        name="timeframe"
        options={TIMEFRAME_OPTIONS}
        selectedValue={task.timeframeType}
        onChange={onChange("timeframeType")}
      />

      {task.timeframeType === TIMEFRAMES.deadline && (
        <div className={styles.deadline}>
          <DateTimePicker
            label="Deadline"
            value={task.deadline}
            onChange={onChange("deadline")}
          />
        </div>
      )}
      {task.timeframeType === TIMEFRAMES.period && (
        <div className={styles.start}>
          <DateTimePicker
            label="Start"
            value={task.start}
            onChange={onChange("start")}
          />
          <DateTimePicker
            label="Finish"
            value={task.finish}
            onChange={onChange("finish")}
          />
        </div>
      )}
    </div>
  );
};

export { TaskTimeframe };
