import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['../parent-employee/parent-employee.component.css']
})
export class CreateEmployeeComponent {

  @Input() employee: Employee;
  // employee = new Employee();
  submitted = false;
  edit = false;

  @Input() dilamArki: string;

  @Output() employeeEmitter = new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService) {
  }

  onSubmit() {
    console.log(this.dilamArki);
    this.submitted = true;
    console.log(this.employee.id);

    if (!this.edit) {
      this.employeeService.addEmployee(this.employee).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.employeeService.editEmployee(this.employee).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    }
    this.employeeEmitter.emit(this.employee);
    this.employee = new Employee();
  }

}
