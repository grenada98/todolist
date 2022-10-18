import React from 'react';
import { Note } from './Note'

export const ListOfNotes = (props) => {
    let temp = [...props.data];
    return (
        <div className='list-of-notes'>
            {
                props.data.map((item, index) => {
                    return <Note key={index} item={item} data={props.data} temp={temp} setData={props.setData} index={index}/>
                })
            }
        </div>
    );
}