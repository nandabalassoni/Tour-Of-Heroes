import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}

//O serviço expõe seu cache de messagese dois métodos: um para add()uma mensagem para o cache e outro para clear()o cache.