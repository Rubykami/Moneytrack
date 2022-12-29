import React from "react"

export type SelectType = {
    name: string,
    optionA: string,
    optionB: string,
    optionC: string,
    selectinfo: string,
    value: string,
    onChange: React.ChangeEventHandler<HTMLSelectElement>
}