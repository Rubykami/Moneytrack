export interface ISelect  {
    name: string,
    optionA: string,
    optionB: string,
    optionC: string,
    selectinfo: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLSelectElement>
}