import TodoImage from "../images/to-do-list.png";

const ToDo=()=>{

    return (
        <div className='container' >
        <h3 style={{marginTop: "20px"}}>
            <img src={TodoImage} alt="Todo" style={{width:"60px"}} />
            To Do
        </h3>
        <hr/>
        </div>
    )
}
export default ToDo;