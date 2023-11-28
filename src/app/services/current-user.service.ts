import { Injectable } from '@angular/core';
import { Token } from '@angular/compiler';
import { inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './login.service';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
// const currentUserData = inject(DataService) 
export class CurrentUserService {
  constructor(private currentUserData: DataService) {}
  currentUser$ = new BehaviorSubject<
  {roleName:any} | null | undefined
  >(undefined);

  currentRole = this.currentUserData.roleName;

  setCurrentUser() {
    if (localStorage.getItem('token')){
      this.currentUser$.next({roleName: this.currentRole});
    } else {
      this.currentUser$.next(null)
    }
  //   const loginService = inject(LoginService)
  //   if(localStorage.getItem('token')){
  //     if(loginService.getrole() == 'Admin'){
  //       this.currentUser$.next({id:'1', name: 'admin', roleName: 'Admin'});
  //     }
  //     if(loginService.getrole() == 'Employee'){
  //       this.currentUser$.next({id:'2', name: 'employee', roleName: 'Employee'});
  //     }
  //   }else{
  //     this.currentUser$.next(null)
  //   }
  // }
}
}
