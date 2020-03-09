import { Component, OnInit } from '@angular/core';
import { User } from '../user/models/user.model';
import { UserService } from '../user/services/user.service';

const SECOND_TO_MILLION_SECOND = 1000;
const SECOND_TO_MINUTE = 60;
const MINUTE_TO_HOUR = 60;
const HOUR_TO_DAY = 24;
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  user: User;
  greetingMessage: string;
  deadline: number;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.generateDeadline(2);
    this.userService.getLoginUser().subscribe((user: User) => {
      this.user = user;
      this.greetingMessage = this.generateGreetingMessage();
    });
  }

  generateGreetingMessage() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const message =
      hours < 12
        ? 'Good Morning'
        : hours < 18
        ? 'Good Afternoon'
        : 'Good Evening';
    return `${message}, ${this.user.firstName} ${this.user.lastName}`;
  }

  generateDeadline(days: number) {
    this.deadline =
      Date.now() +
      SECOND_TO_MILLION_SECOND *
        SECOND_TO_MINUTE *
        MINUTE_TO_HOUR *
        HOUR_TO_DAY *
        days;
  }
}
