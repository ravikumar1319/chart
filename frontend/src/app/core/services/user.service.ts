import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from '../../../envirnoments'
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { WebSocketService } from './web.socket.services';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  socket: any;
  constructor(
    private http: HttpClient,
    private _webSocketService: WebSocketService
  ) {
    this.socket = this._webSocketService.getSocket()
  }

  userSubmit(data: any) {
    this.socket.emit('population', data);
  }

  submitPie(data: any) {
    this.socket.emit('expense', data)
  }

  getUser(): Observable<any> {
    return this.http.get(`${environment.SOCKET_ENDPOINT}/api/`,)
  }

  getChatData(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('chart', (data: any) => {
        observer.next(data)
      })


    })
  }

  getPieData(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('pie', (data: any) => {
        observer.next(data)
      })
    })
  }

}
