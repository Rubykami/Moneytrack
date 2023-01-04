import './Input.scss'
import { IInput } from '../../interfaces/Input'
import React, { forwardRef } from 'react'

const Input: React.ForwardRefRenderFunction<HTMLInputElement, IInput> = (
    { name = '', type, OnChange, value, text, ...rest },
    ref
) => {
    return (
        <div className="InputBlock">
            <label htmlFor={name} className="InputBlock__Label">
                {text}
            </label>
            <input
                className="InputBlock__Input"
                type={type}
                name={name}
                value={value}
                onChange={OnChange}
                ref={ref}
                {...rest}
            />
        </div>
    )
}

export default forwardRef(Input)
