import React, {useEffect, useState} from 'react';
import axios from "axios";
const App = () => {
    const  [todos, setTodos] = useState([])
    useEffect(() => {
        axious('https://65642482ceac41c0761d7ebf.mockapi.io/')
            .then(({data}) => setTodos(data))
        },[])


const handleDelete(id) => {
        const deleteItems = item.filter(item)
    }





  return (
    <div className={'conatainer'}>
        <h1>
Todo List
        </h1>
        <input type={'text'}
        <div>
            {
                todos.map(todo =>
                        <div key={todo.id}>
                            <div className={'todo-wrapper'} key={todo.id}></div>
                            {todo.title}
                            <input type="checkbox" checked={todo.completed} />
                            <span>
                {dayjs(todo.createdeAt).format('HH:mm DD.MM.YYYY')}
            </span>
                        </div>
                )
            }
        </div>
    </div>
  );
}

export default App;
