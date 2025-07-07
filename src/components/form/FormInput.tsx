import React from 'react'
import { Input } from "@heroui/input";

type FormInputProps = {
    name: string
    type: string
    label?: string
    defaultValue?: string;
    placeholder?: string;
    classInput?: string;
    classLabel?: string;
}

const FormInput = (props: FormInputProps) => {

    const { name, type, label, defaultValue, placeholder, classInput, classLabel } = props;

    return (
        <div>
            <label htmlFor={name} className={classLabel}>{label}</label>
            <Input name={name} type={type} placeholder={placeholder} defaultValue={defaultValue} className={classInput} />
        </div>
    )
}

export default FormInput