import React, {useState} from "react";

const DropdownPicker = ({title, values, setFunction}) => {
    const [selectedOption, setSelectedOption] = useState('1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setFunction(values.find((el) => el.id === event.target.value));
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

export default DropdownPicker;