import React, {ChangeEventHandler} from 'react';

interface IFormInput {
    id: string,
    labelText: string,
    value?: string,
    type?: string,
    handleChange: ChangeEventHandler<HTMLElement>,
    className?: string
}

const FormInput: React.FC<IFormInput> = ({
                                             id,
                                             labelText,
                                             type = 'text',
                                             value,
                                             handleChange,
                                             className
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
            />
        </div>
    );
};

export default FormInput;
