import React from "react"

export type InputType = {
    type: string,
    text: string,
    name: string,
    placeholder: string,
    OnChange: React.ChangeEventHandler<HTMLInputElement>,
    value: string
}

