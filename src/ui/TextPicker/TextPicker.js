import React, {useState} from "react";

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

export default TextPicker;