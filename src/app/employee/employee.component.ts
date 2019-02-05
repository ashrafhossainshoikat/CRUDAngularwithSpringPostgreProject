import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {EmployeeService} from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( private employeeService: EmployeeService) {}

  employee = new Employee();
  employees: Employee[] = new Array<Employee>();
  submitted = false;
  edit = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.employee.id);
    if (!this.edit) {
      this.employeeService.addEmployee(this.employee).subscribe(
        response => {
          console.log(response);
          this.employees.push(response);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.employeeService.editEmployee(this.employee).subscribe(
        response => {
          console.log(response);
          this.employees = this.employees.filter(emp => emp.id !== this.employee.id);
          this.employees.push(response);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  ngOnInit() {this.fetchAllEmployee(); }


  fetchAllEmployee(): void {
    this.employeeService.getAllEmployee().subscribe(
      response => {
        this.employees = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  editEmployee(employeeObj: Employee): void {
    this.employee = Object.assign( new Employee(), employeeObj);
    this.edit = true;
  }

  deleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      response => {
        this.employees = this.employees.filter(emp => emp.id !== employeeId);
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  newEmployee() {
    this.employee = new Employee();
    this.edit = false;
  }
}
