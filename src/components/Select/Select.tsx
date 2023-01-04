import './Select.scss'
import { SelectType } from '../../interfaces/Select'

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, SelectType> = ({
    name,
    onChange,
    value,
    selectinfo,
    optionA,
    optionB,
    optionC = '',
}) => {
    return (
        <div className="select__accounttype__div">
            <label
                className="select__accounttype__div__label"
                htmlFor="accounttype"
            >
                {' '}
                {selectinfo}{' '}
            </label>
            <select
                className="select__accounttype__div__select"
                name={name}
                value={value}
                onChange={onChange}
            >
                <option className="select__accounttype__div__select__option">
                    {optionA}
                </option>
                <option className="select__accounttype__div__select__option">
                    {optionB}
                </option>
                {optionC && (
                    <option className="select__accounttype__diSv__select__option">
                        {optionC}
                    </option>
                )}
            </select>
        </div>
    )
}

export default Select
