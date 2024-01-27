import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {

  constructor(
    private _userService: UserService,
  ) {
    // this._userService.getChatData().subscribe((res: any) => {
    //   console.log(res)
    //   alert('hi')
    // })
  }

}
