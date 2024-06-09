import { useState } from "react";
import { useNavigate } from "react-router-dom";
import todoService from "../services/todo.service";
import "../AddToDO.css";

const AddToDo = () =>{
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('');
    const[status,setStatus]=useState('');

    const navigate=useNavigate();

    const saveToDo = (e) =>{
        e.preventDefault();

        const todo = {title, description, status};

        todoService.create(todo)
        .then(response =>{
            console.log('Todo created successfully',response.data);
            navigate('/');
        })
        .catch(error =>{
            console.log('Something went wrong',error);
        });
    };

    return(
        <div className="container" style={{marginTop:"20px"}}>
            <div className="root">
                <div className="myFrame">
                    <form>
                        <div className="form-group">
                            <label>Title:</label>
                            <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <textarea
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Status:</label>
                            <select 
                            className="form-select"
                            value={status}
                            onChange={(e)=>setStatus(e.target.value)}
                            >
                                <option selected>Select</option>
                                <option value="Completed">Completed</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                
                        <div className="d-flex align-items-cente mt-2">
                            <button className="btn btn-primary" onClick={saveToDo}>Save</button>
                            <button className="btn btn-primary" onClick={()=>navigate("/")} style={{marginLeft: '10px'}}>Back</button>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    )
};

export default AddToDo;