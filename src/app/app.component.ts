import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './models/user.model';
import { UserService } from './services/user.service';
import { RegisterService } from './services/register.service';
import { Register } from './models/register.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userData: User[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService, private registerService: RegisterService) {}

  ngOnInit() {
    this.subscription.add(this.userService.getUsers().subscribe((users: User[]) => {
      this.userData = users;
    }));

    this.subscription.add(this.userService.createUser().subscribe((res: any) => {
      console.log('25: ', res);
    }));

    this.subscription.add(this.registerService.register().subscribe((res: Register) => {
      console.log('25: ', res);
      localStorage.setItem('token', res.token);
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
