import './SubmitButton.scss'

type TextProps = {
    text:string
}

const SubmitButton = ({text} : TextProps) => {
    return (
        <input type='submit' value={text} />
    )
}

export default SubmitButton