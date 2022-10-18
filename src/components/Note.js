import React, {useEffect, useState, useRef} from 'react';
import { InputField } from './InputField';

export const Note = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    function deleteNote(){
        props.setData(props.data.filter((item, i) => i!==props.index));
        
    }
    function editNote(){
        setIsDisabled(false);
    }
    function applyEditNote(){
        props.setData([...props.temp]);
        localStorage.notes = JSON.stringify(props.data);
        setIsDisabled(true);
    }
    return(
        <div className = 'note'>
            <InputField temp={props.temp} index={props.index} disabled={isDisabled} item={props.item}/>
            <div className = 'note__button'>
                <button className={isDisabled ? 'note__button-apply': 'note__button-apply active'} onClick={applyEditNote}>
                    <img src = {process.env.PUBLIC_URL + '/img/check.svg'} alt = 'apply'/>
                </button>
                <button className ={isDisabled ? 'note__button-edit': 'note__button-edit disabled'} type = 'button' onClick={editNote}>
                    <img src = {process.env.PUBLIC_URL + '/img/pen.svg'} alt = 'pen'/>
                </button>
                <button className = 'note__button-delete' type = 'button' onClick={deleteNote}></button>
            </div>
        </div>
    );
}