package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.ToDo;
import com.app.service.TodoService;

@RestController
@RequestMapping("/todo")
@CrossOrigin(origins = "http://localhost:3000/")
public class TodoController {
	
	@Autowired
	private TodoService service;
	
	@GetMapping
	public List<ToDo> getAllList(){
		return service.getAll();
	}
	
	@GetMapping("/{id}")
	public ToDo getTodoById(@PathVariable Long id) {
		return service.getTodoById(id);	
	}
	
	@PostMapping
	public ToDo createNewToDo(@RequestBody ToDo newTodo)
	{
		return service.createToDo(newTodo);
	}
	
	@PutMapping("/{id}")
	public ToDo updateToDo(@PathVariable Long id,@RequestBody ToDo todo) {
		return service.updateToDo(id,todo);
	}
	
	@DeleteMapping("/{id}")
	public String deleteToDo(@PathVariable Long id) {
		return service.deleteToDo(id);
		
	}
}
