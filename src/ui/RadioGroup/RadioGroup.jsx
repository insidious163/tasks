import styles from "./RadioGroup.module.css";

const RadioGroup = ({ name, options, selectedValue, onChange }) => {
  const handleChangeOption = ({ target: { value } }) => {
    onChange(value);
  };

  return (
    <div className={styles.root}>
      {options.map(({ value, label }) => (
        <label key={value}>
          <input
            key={value}
            name={name}
            type="radio"
            value={value}
            checked={value === selectedValue}
            onChange={handleChangeOption}
          />
          {label}
        </label>
      ))}
    </div>
  );
};

export { RadioGroup };
