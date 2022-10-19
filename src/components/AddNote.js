import React, { useRef, useState } from 'react';

export const AddNote = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const addNote = useRef();
    const addNoteInf = () => {
        let p = [...props.data, addNote.current.value];
        props.setData(p);
        
        localStorage.notes = JSON.stringify(p);
        addNote.current.value = '';
    }
    const onChange = (e) =>{
        e.target.value.length > 0 ? setIsDisabled(false) : setIsDisabled(true);
    }
    return (
        <div className='add-note'>
            <input ref={addNote} className='add-note__input' type='text' placeholder='Добавить заметку' onChange={onChange}>
            </input>
            <button className='add-note__button' disabled={isDisabled} onClick={addNoteInf}>Добавить</button>
        </div>
    );
}