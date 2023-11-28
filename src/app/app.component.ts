import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from './services/current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InsuranceApp';
  constructor(private currentUserService: CurrentUserService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.currentUserService.setCurrentUser();
    }, 2000);
    
  }
}
