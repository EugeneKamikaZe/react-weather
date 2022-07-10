import React, {ChangeEventHandler} from 'react';

interface IFormInput {
    id: string,
    labelText: string,
    value?: string,
    type?: string,
    handleChange: ChangeEventHandler<HTMLElement>,
    className?: string,
    placeholder?: string | undefined
}

const FormInput: React.FC<IFormInput> = ({
                                             id,
                                             labelText,
                                             type = 'text',
                                             value,
                                             handleChange,
                                             className,
                                             placeholder
                                         }) => {
    return (
        <div className={className}>
            <label htmlFor={id}>
                {labelText}
            </label>
            <input type={type}
                   id={id}
                   name={id}
                   value={value}
                   onChange={handleChange}
                   placeholder={placeholder}
            />
        </div>
    );
};

export default FormInput;
