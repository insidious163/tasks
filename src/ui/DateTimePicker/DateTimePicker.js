import React, {useState} from "react";

const DateTimePicker = ({title, initValue, setFunction}) => {
    const [selectedDateTime, setSelectedDateTime] = useState(initValue);

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

export default DateTimePicker;