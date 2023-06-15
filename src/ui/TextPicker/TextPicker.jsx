import styles from "./TextPicker.module.css";

const TextPicker = ({ label, value, onChange }) => {
  const handleChangeText = ({ target: { value } }) => {
    onChange(value);
  };

  return (
    <div className={styles.root}>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChangeText} />
    </div>
  );
};

export { TextPicker };
