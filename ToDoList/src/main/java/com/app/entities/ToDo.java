package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="todo")
public class ToDo {
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(length=30)
	private String title;
	private String description;
	private String status; // pending/completed
	
	//parameterized constructor
	public ToDo(Long id, String title, String description, String status) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.status = status;
	}

	//default constructor 
	public ToDo() {
		super();
	}
	
	//getter and setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	//over ride tostring

	@Override
	public String toString() {
		return "ToDo [id=" + id + ", title=" + title + ", description=" + description + ", status=" + status + "]";
	}
	
}
