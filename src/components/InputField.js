import React from 'react';

export const InputField = (props) => {
    function onChange(e){
        props.temp[props.index] = e.target.value;
    }
    return (
        <textarea className = {props.disabled? 'note__text' : 'note__text active'} type='text' defaultValue={props.item} disabled={props.disabled} onChange={onChange}/>
    )
}