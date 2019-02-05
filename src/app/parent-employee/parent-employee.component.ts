import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-parent-employee',
  templateUrl: './parent-employee.component.html',
  styleUrls: ['./parent-employee.component.css']
})
export class ParentEmployeeComponent implements OnInit {

  constructor( private employeeService: EmployeeService) {}

  employee = new Employee();
  employees: Employee[] = new Array<Employee>();
  edit = false;

  customString = 'Obviously Custom String';

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

  deleteEmployee(employeeObj: Employee): void {
    this.employeeService.deleteEmployee(employeeObj.id).subscribe(
      response => {
        this.employees = this.employees.filter(emp => emp.id !== employeeObj.id);
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  processEmployee(employee: Employee) {
    this.employees = this.employees.filter(emp => emp.id !== employee.id);
    this.employees.push(employee);
  }
}



