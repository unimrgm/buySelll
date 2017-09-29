import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AuthService } from "../services/auth.service";
import { ChatService } from "../services/chat.service";
import { ChatMessage } from "../models/chat-message.model";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: any;
  constructor(private chat: ChatService) { }

  ngOnInit() {
    console.log('Feed initializing !');
    this.feed = this.chat.getMessages();
  }
  ngOnChanges() {
    this.feed = this.chat.getMessages();
  }

}
