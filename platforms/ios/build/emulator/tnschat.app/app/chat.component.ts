// app/chat.component.ts
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChatService, User, Message } from './chat.service';
import { ListView } from 'ui/list-view';
import { TextView } from 'ui/text-view';

@Component({
    selector: 'tc-chat',
    styleUrls: ['chat.component.css'],
    templateUrl: 'chat.component.html',
    providers: [ChatService]
})
export class ChatComponent {
    public me: User;
    public other: User;
    public messages: Array<Message>;


    @ViewChild('chatBox') chatBoxRef: ElementRef;

    private get chatBox(): ListView {
        return this.chatBoxRef.nativeElement;
    }

    @ViewChild('newMessage') newMessageRef: ElementRef;

    private get newMessage(): TextView {
        return this.newMessageRef.nativeElement;
    }

    constructor(private chatService: ChatService) {
        const chat = chatService.getChat();


        this.me = chat.participants.me;
        this.other = chat.participants.other;
        this.messages = chat.messages;
        console.log("Mensajes", this.messages);
    }
    public bubbleClass(message: Message): string {
        const sender = this.isMy(message) ? 'me' : 'other';

        return `bubble-from-${sender}`;
    }

    private isMy(message: Message): boolean {
        return message.sender == this.me;
    }


}