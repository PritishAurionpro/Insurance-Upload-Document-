import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AgentComponent } from '../agent/agent.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employeeName: any;

  constructor(private data: DataService, private router: Router) {
    this.employeeName = data.userName;
  }
  navigateTo(route: string): void {
    this.router.navigate([`/employee/${route}`]);
  }
  ngOnInit(): void{
    var token = localStorage.getItem('token')
    var role = localStorage.getItem('role')
    if (token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
    else if(role!= 'Employee'){
      alert('Please Login as Employee')
      this.router.navigateByUrl('/login')
    }
  }
}

  

/*
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeName:any
  constructor(private data:DataService){
    this.employeeName= data.userName
  }

}
*/