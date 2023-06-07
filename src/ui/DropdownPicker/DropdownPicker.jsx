import styles from "./DropdownPicker.module.css";

const DropdownPicker = ({ label, options, value, onChange }) => {
  const handleChangeOption = ({ target: { value } }) => {
    onChange(value);
  };

  return (
    <div className={styles.root}>
      <label>{label}</label>
      <select value={value} onChange={handleChangeOption}>
        {options.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export { DropdownPicker };
