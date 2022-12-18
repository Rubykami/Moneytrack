import './Select.scss'
import { SelectType } from '../../types/Select'

const Select: React.ForwardRefRenderFunction< HTMLSelectElement, SelectType> = ({name, selectinfo, optionA, optionB, optionC=''}) => {
    return (
    <div className='select__accounttype__div'>
        <label className='select__accounttype__div__label' htmlFor="accounttype"> {selectinfo} </label>
        <select className='select__accounttype__div__select' name={name}>
            <option className='select__accounttype__div__select__option'>{optionA}</option>
            <option className='select__accounttype__div__select__option'>{optionB}</option>
            {
                optionC &&
            <option className='select__accounttype__div__select__option'>{optionC}</option>
            }
        </select>
    </div>
    )

}

export default Select;
