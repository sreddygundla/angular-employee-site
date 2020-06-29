import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employee: Employee=new Employee("","",0,"");
  message:any;

  constructor(private service:EmployeeService) { }

  ngOnInit() {
  }
  

  public Submit(){
let resp=this.service.addEmployee(this.employee);
resp.subscribe((data)=>this.message=data);
  }

}
