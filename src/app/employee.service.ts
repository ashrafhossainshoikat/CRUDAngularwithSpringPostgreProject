import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {ApiEndPoint} from './api-endpoint';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiEndPoint: ApiEndPoint = new ApiEndPoint();
  constructor(private httpClient: HttpClient) {}

  addEmployee(employeeData: Employee): Observable<any> {
    return this.httpClient.post<Employee>(this.apiEndPoint.ADD_EMPLOYEE_URL, employeeData);
  }

  getAllEmployee(): Observable<any> {
    return this.httpClient.get(this.apiEndPoint.GET_ALL_EMPLOYEE_URL);
  }

  editEmployee(employeeData: Employee): Observable<any> {
    return this.httpClient.put(this.apiEndPoint.EDIT_EMPLOYEE_URL , employeeData);
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.httpClient.get(this.apiEndPoint.DELETE_EMPLOYEE_URL + employeeId);
  }

}
