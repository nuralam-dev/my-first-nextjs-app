import React from 'react';
import ToDo from '../components/ToDo';

const ToDoPage =async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data =await res.json()
    return (
        <div className='grid grid-cols-4 gap-2 m-2.5'>
            {
                data.map(todo=> <ToDo key={todo.id} todo={todo}></ToDo>)
            }
        </div>
    );
};

export default ToDoPage;