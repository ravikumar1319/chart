// web-socket.service.ts
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: Socket;

  constructor() {
    // Connect to the WebSocket server
    this.socket = io('https://chart-backend-zr3e.onrender.com'); // Replace with your WebSocket server URL
  }

  public getSocket(): Socket {
    return this.socket;
  }
}
