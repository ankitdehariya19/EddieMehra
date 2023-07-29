import React, { useState } from 'react';

function TextArea(props) {
  const { name, value, label, id, onChange, ...rest } = props;
  const [text, setText] = useState(value || '');

  const onChangeHandler = (event) => {
    const { name: inputName, value: inputValue } = event.target;
    setText(inputValue);

    if (onChange) {
      onChange(inputName, inputValue);
    }
  };

  return (
    <div className="mb-4">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        className="w-full py-2 pr-3 pl-8 text-gray-800 text-sm rounded border inline-flex gap-x-2 justify-between focus:outline-dashed outline-offset-0 focus:outline-offset-2 transition-all duration-200 ring-gray-300 focus:ring-0 hover:ring-1"
        id={id}
        name={name}
        value={text}
        onChange={onChangeHandler}
        {...rest}
      />
    </div>
  );
}

export default TextArea;
