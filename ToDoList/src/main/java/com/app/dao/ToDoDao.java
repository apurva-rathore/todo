package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ToDo;


public interface ToDoDao extends JpaRepository<ToDo, Long>{

}
