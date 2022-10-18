import React from 'react';
import { ListOfNotes } from './ListOfNotes';
import { AddNote } from './AddNote';
import { NoResults } from './NoResults';
import { useState, useEffect } from 'react';

export const Wrapper = () => {
    const [data, setData] = useState(localStorage.getItem('notes') ? [...JSON.parse(localStorage.getItem('notes'))] : []);
    useEffect(() => {
        localStorage.notes = JSON.stringify(data);
    }, [data]);
    return (
        <div className='wrapper'>
            <AddNote data={data} setData={setData}/>
            {
                data.length>0 ? <ListOfNotes data={data} setData={setData}/>: <NoResults />
            }
        </div>
    );
}