import styles from "./DateTimePicker.module.css";

const DateTimePicker = ({ label, value, onChange }) => {
  const handleChangeDateTime = ({ target: { value } }) => {
    onChange(value);
  };

  return (
    <div className={styles.root}>
      <label>{label}</label>
      <input
        type="datetime-local"
        value={value}
        onChange={handleChangeDateTime}
      />
    </div>
  );
};

export { DateTimePicker };
