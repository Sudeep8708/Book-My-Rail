import React from 'react'

const FormField = ({label, type, value, onChange}) => {
    return (
        <>
        <label>{label}</label>
        <input name={label} placeholder={label} type={type} value={value} onChange={onChange} required/>
        <br/>
        </>
    )
}
export default FormField;
