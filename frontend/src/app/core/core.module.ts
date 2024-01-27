import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { TitleConfigService } from './services/title.config.service';
import { WebSocketService } from './services/web.socket.services';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [UserService, TitleConfigService, WebSocketService]
})
export class CoreModule { }
