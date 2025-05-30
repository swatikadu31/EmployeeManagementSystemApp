package com.springboot.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.app.model.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
