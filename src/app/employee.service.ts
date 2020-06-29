import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


  public addEmployee(employee){
    return this.http.post(environment.apiUrl + "/addEmployee",employee,{responseType:'text' as 'json'});
  }

  public getEmployees(){
    return this.http.get(environment.apiUrl + "/getAllEmployees");
  }

  public findEmployeeByEmailId(email){
    return this.http.get(environment.apiUrl + "/findEmployee/"+email);
  }

  public deleteEmployee(id){
    return this.http.delete(environment.apiUrl + "/deleteEmployee/"+id);
  }
}
