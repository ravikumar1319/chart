import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  username: any;
  population: any = { 'andhraPradesh': 0, 'karnataka': 0, 'kerala': 0, 'tamilNadu': 0, 'telangana': 0 }
  expense: any = { 'travel': 0, 'food': 0, 'shopping': 0, 'rent': 0 }
  constructor(
    private _userService: UserService,
    private router: Router
  ) {

    this._userService.getChatData().subscribe((res: any) => {
      const popKeys = Object.keys(this.population);
      for (let i = 0; i < popKeys.length; i++) {
        const key = popKeys[i];
        if (res[i]) {
          this.population[key] = res[i];
        }
      }
    })

    this._userService.getPieData().subscribe((res: any) => {
      const popKeys = Object.keys(this.expense);
      for (let i = 0; i < popKeys.length; i++) {
        const key = popKeys[i];
        if (res[i]) {
          this.expense[key] = res[i];
        }
      }
    })
  }

  submit() {
    this._userService.userSubmit(this.population)
  }
  submitPie() {
    this._userService.submitPie(this.expense)
  }

}
