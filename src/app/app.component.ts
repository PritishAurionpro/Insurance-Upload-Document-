import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from './services/current-user.service';
import { DocumentComponent } from './document/document.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { every } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InsuranceApp';
  constructor(private currentUserService: CurrentUserService,private router : Router) {}

  ngOnInit(): void{
    var token = localStorage.getItem('token')
    var role = localStorage.getItem('role')
    if (token==null){
      alert('Please login')
      this.router.navigateByUrl('/login')
    }
    else if(role!= 'Admin'){
      alert('Please Login as Admin')
      this.router.navigateByUrl('/login')
    }
  }
  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.currentUserService.setCurrentUser();
  //   }, 2000);


  }

