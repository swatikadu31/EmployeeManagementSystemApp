import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empDetail !: FormGroup;
  empObj : Employee = new Employee();
  empList : Employee[] = [];

  constructor(private formBuilder : FormBuilder, private empService : EmployeeService) { }

  ngOnInit(): void {

    this.getAllEmployee();

    this.empDetail = this.formBuilder.group({
      empid : [''],
      firstName : [''],
      lastName : [''],
      emailId : ['']
    });    
    this.getAllEmployee();
  }

  addEmployee() {
    console.log(this.empDetail);
    this.empObj.empid = this.empDetail.value.empid;
    this.empObj.firstName = this.empDetail.value.firstName;
    this.empObj.lastName = this.empDetail.value.lastName;
    this.empObj.emailId = this.empDetail.value.emailId;

    this.empService.addEmployee(this.empObj).subscribe({
     next: (res)=>{
        console.log(res);
        this.getAllEmployee();
    },error: err=>{
        console.log(err);
    }});

  }

  getAllEmployee() {
    this.empService.getAllEmployees().subscribe({
      next:(res)=>{
        this.empList = res;
    },error:err=>{
      console.log("error while fetching data.")
    }});
  }

  editEmployee(employee: Employee) {
    if (!employee|| !employee.empid) {
      console.error('Employee data or ID is undefined');
      return;
    }
  
    this.empDetail.setValue({
      empid: employee.empid || '',
      firstName: employee.firstName || '',
      lastName: employee.lastName || '',
      emailId: employee.emailId || ''
    });
  }
  updateEmployee() {
    if (!this.empObj || !this.empObj.empid) {
      console.error('Employee data or ID is undefined');
      return;
    }
    this.empObj.empid = this.empDetail.value.empid;
    this.empObj.firstName = this.empDetail.value.firstName;
    this.empObj.lastName = this.empDetail.value.lastName;
    this.empObj.emailId = this.empDetail.value.emailId;

    this.empService.updateEmployee(this.empObj).subscribe({
      next:(res)=>{
      console.log(res);
      this.getAllEmployee();
    },error: err=>{
      console.log(err);
    }})

  }

  deleteEmployee(emp : Employee) {
    if (!emp || !emp.empid) {
      console.error('Employee data or ID is undefined');
      return;
    }
  
    this.empService.deleteEmployee(emp).subscribe({
      next: (res) => {
        console.log(res);
        alert('Employee deleted successfully');
        this.getAllEmployee();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
