export interface IInput {
    type: string,
    text: string,
    name: string,
    placeholder: string,
    OnChange: React.ChangeEventHandler<HTMLInputElement>,
    value?: string
}

