import './InputButton.scss'

type TextProps = {
    text:string
    type:string
}

const InputButton = ({text} :TextProps, {type} :TextProps) => {
    return (
        <input type={type} value={text} />
    )
}

export default InputButton