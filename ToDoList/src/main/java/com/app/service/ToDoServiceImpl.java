package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ToDoDao;
import com.app.entities.ToDo;

@Service
@Transactional
public class ToDoServiceImpl implements TodoService{
	
	@Autowired
	private ToDoDao dao;

	public List<ToDo> getAll() {
		return dao.findAll();
	}

	public ToDo getTodoById(Long id) {
		return dao.findById(id).orElse(null);
	}

	public ToDo createToDo(ToDo newTodo) {
		// TODO Auto-generated method stub
		return dao.save(newTodo);
	}

	@Override
	public ToDo updateToDo(Long id,ToDo todo) {
		ToDo toDo=getTodoById(id);
		if (!todo.getTitle().equals("string"))
		{toDo.setTitle(todo.getTitle());}
		if (!todo.getDescription().equals("string"))
		{toDo.setDescription(todo.getDescription());}
		if (!todo.getStatus().equals("string"))
		{toDo.setStatus(todo.getStatus());}
		return dao.save(toDo);
	}

	@Override
	public String deleteToDo(Long id) {
		dao.deleteById(id);
		return "Todo Deleted...";
	}

	
	
	
	
}
