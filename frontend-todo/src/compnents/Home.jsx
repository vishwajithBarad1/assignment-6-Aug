import {useEffect, useState} from "react";

import axios from 'axios';

function Home (){
    const [todos,setTodos] = useState([]);
    const getTodos = async ()=>{
        const response = await axios.get('http://localhost:4000/todos');
        setTodos([response.data.data])
    }
    useEffect(()=>{
        getTodos();
    },[])
    return (
    <div className="todoContainer">
        <div className="todoContainerTitle"> TODOS </div>
        <div className="todos">
            {todos[0].map((todo,index)=>(<div key={index} className="todoTitle">
                   <div> title : {todo.title}</div>
                    <div>description: {todo.description}</div>
                    <br /><br />
            </div>))}
        </div>
    </div>)
}

export default Home