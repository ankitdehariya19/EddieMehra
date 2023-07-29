
import React, { useState, useEffect } from 'react';

function Input(props) {
  const { name, value: propValue, label, id, onChange, ...rest } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    setText(propValue || ''); 
  }, [propValue]);

  const onChangeHandler = (event) => {
    console.log(event.target.name,event.target.value)
    const value = event.target.value;
    setText(value);

    if (onChange) {
      onChange(name, value);
    }
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        // className='w-full py-2 pr-3 pl-8 text-gray-800 text-sm rounded border inline-flex gap-x-2 justify-between focus:outline-dashed outline-offset-0 focus:outline-offset-2 transition-all duration-200 ring-gray-300 focus:ring-0 hover:ring-1'
        onChange={onChangeHandler}
        value={text}
        {...rest}
      />
    </div>
  );
}

export default Input;
