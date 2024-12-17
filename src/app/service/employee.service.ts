import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8080/api/v1/employees";
  employees: Employee[] | undefined;
  constructor(private http: HttpClient) {}

  addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, emp)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
      console.log(this.employees);
  }

  updateEmployee(emp: Employee): Observable<Employee> {
    const url = `${this.baseUrl}/${emp.empid}`;
    return this.http.put<Employee>(url, emp)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteEmployee(emp: Employee): Observable<Employee> {
    const url = `${this.baseUrl}/${emp.empid}`;
    return this.http.delete<Employee>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('API Error: ', error);
    return throwError(error);
  }
}
