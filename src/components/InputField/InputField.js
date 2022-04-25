import React from "react";

import './InputField.css';

function InputField(props) {
    const { type, formName, name, title, minLength = 0, maxLength = 60, pattern, isEdited, required, value, onChange } = props;

    return (
        <fieldset className={`input-field ${formName}__input-field`}>
            <label className="input-field__caption" htmlFor={`${formName}-${name}`}>{title}</label>
            <input className="input-field__input" id={`${formName}-${name}`}
                type={type}
                name={name}
                minLength={minLength}
                maxLength={maxLength}
                pattern={pattern}
                required={required}
                disabled={!isEdited}
                value={value}
                onChange={onChange}
            />
        </fieldset>
    )
};

export default InputField;