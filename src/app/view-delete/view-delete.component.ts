import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-delete',
  templateUrl: './view-delete.component.html',
  styleUrls: ['./view-delete.component.css']
})
export class ViewDeleteComponent implements OnInit {

  employees:any;
  email:string;
  
  constructor(private service:EmployeeService) { }


public deleteEmployee(id:number){
 let resp= this.service.deleteEmployee(id);
 resp.subscribe((data)=>this.employees=data);
}

public findEmployeeByEmailId(){
  let resp= this.service.findEmployeeByEmailId(this.email);
  resp.subscribe((data)=>this.employees=data);
 }

  ngOnInit() {
    let resp=this.service.getEmployees();
    resp.subscribe((data)=>this.employees=data);
  }

}
