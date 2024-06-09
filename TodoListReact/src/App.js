import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './complonents/ToDo';
import TodoList from './complonents/ToDoList';
import NotFound from './complonents/NotFound';
import AddToDo from './complonents/AddToDo';

function App() {
  return (
    <BrowserRouter>
     <div>
      <ToDo></ToDo>
      <Routes>
        <Route exact path='/' element={<TodoList/>} />
        <Route path='*' element={<NotFound />}/>
        <Route exact path='/add' element={<AddToDo/>}/>
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
