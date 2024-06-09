package com.app.service;

import java.util.List;

import com.app.entities.ToDo;

public interface TodoService {

	List<ToDo> getAll();

	ToDo getTodoById(Long id);

	ToDo createToDo(ToDo newTodo);

	ToDo updateToDo(Long id,ToDo todo);

	String deleteToDo(Long id);

}
