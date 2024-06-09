import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import todoService from '../services/todo.service';
import TodoImage from "../images/to-do-list.png";

const TodoList = () =>{
    const [todos, setTodos]=useState([]);

    const init= ()=>{
        todoService
            .getAll()
            .then((response)=>{ 
                console.log('Printing todo data', response.data);
                setTodos(response.data);
            })
            .catch((error)=>{
                console.log('Something went wrong',error);
            });
    };

    useEffect(()=>{
        init();
    },[]);

    const handleDelete =(id)=>{
        console.log('Printing id',id);
        todoService
        .remove(id)
        .then((response)=>{
            console.log('todo deleted successfully',response.data);
            init();
        })
        .catch((error)=>{
            console.log('Something went wrong', error);
        });
    };


    return (
        <div className='container' >
            <div>
                <Link to='/add' className="btn btn-primary mb-2">
                    Add Todo
                </Link>
                <table className="table table-bordered table-striped ">
                    <thead className=" thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th colSpan={3}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.status}</td>
                                <td>
                                    <Link
                                    className="btn btn-info"
                                    to={`/todo/edit/${todo.id}`}
                                    >
                                        Update
                                    </Link>
                                </td>
                                <td>
                                    <button
                                    className="btn btn-danger ml-2"
                                    onClick={()=>{
                                        handleDelete(todo.id);
                                    }}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;