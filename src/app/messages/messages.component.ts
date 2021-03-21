import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  /* propriedade pública messageService. 
 O Angular injetará o singleton MessageServicenessa propriedade ao criar o MessagesComponent. 
 A messageServicepropriedade deve ser pública porque você está prestes a vinculá-la ao modelo.*/

  ngOnInit(): void {
  }

}
