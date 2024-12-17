package com.springboot.app.model;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name ="employeedata")
public class Employee {

	@Id
	@NonNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "empid", nullable = false)
	private long empid;
	@NonNull
	@Column(name="first_name")
	private String firstName;
	@NonNull
	@Column(name="last_name")
	private String lastName;
	@NonNull
	@Column(name="email_id")
	private String emailId;
	
	public Employee(Long empid,String firstName, String lastName, String emailId) {
		super();
		this.empid=empid;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
	}
public Employee() {
		
	}
	
}
