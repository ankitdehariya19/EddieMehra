import React, { useState, useEffect } from 'react';

const EmailInput = ({ label, id, value: propValue, onChange, onBlur, ...rest }) => {
  const [text, setText] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setText(propValue || '');
    setIsValid(validateInput(propValue));
  }, [propValue]);

  const onChangeHandler = (event) => {
    console.log(event.target.name, event.target.value);
    const value = event.target.value;
    setText(value);

    if (onChange) {
      onChange(event.target.name, value);
    }
  };

  const onBlurHandler = () => {
    setIsTouched(true);
    setIsValid(validateInput(text));
    
    if (onBlur) {
      onBlur();
    }
  };

  const validateInput = (input) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(input);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        className={`w-full py-2 pr-3 pl-8 text-gray-800 text-sm rounded border inline-flex gap-x-2 justify-between focus:outline-dashed outline-offset-0 focus:outline-offset-2 transition-all duration-200 ring-gray-300 focus:ring-0 hover:ring-1 ${isTouched && !isValid ? 'border-red-500' : ''}`}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={text}
        type="email"
        {...rest}
      />
      {isTouched && !isValid && (
        <p className="text-red-500 text-sm mt-1">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export default EmailInput;
