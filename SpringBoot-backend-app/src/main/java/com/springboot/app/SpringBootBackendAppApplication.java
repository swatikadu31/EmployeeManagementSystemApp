package com.springboot.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.springboot.app.controller.EmployeeController;

@SpringBootApplication(exclude= {
	    org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class
	})
public class SpringBootBackendAppApplication {

	public static void main(String[] args) {
ConfigurableApplicationContext context=	SpringApplication.run(SpringBootBackendAppApplication.class, args);
EmployeeController employeeController=context.getBean(EmployeeController.class);
//employeeController.addEmployee();
System.out.println(employeeController.getAllEmployees());
	}

}
