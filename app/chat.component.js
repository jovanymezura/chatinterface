"use strict";
// app/chat.component.ts
var core_1 = require("@angular/core");
var chat_service_1 = require("./chat.service");
var ChatComponent = (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
        var chat = chatService.getChat();
        this.me = chat.participants.me;
        this.other = chat.participants.other;
        this.messages = chat.messages;
        console.log("Mensajes", this.messages);
    }
    Object.defineProperty(ChatComponent.prototype, "chatBox", {
        get: function () {
            return this.chatBoxRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChatComponent.prototype, "newMessage", {
        get: function () {
            return this.newMessageRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    ChatComponent.prototype.bubbleClass = function (message) {
        var sender = this.isMy(message) ? 'me' : 'other';
        return "bubble-from-" + sender;
    };
    ChatComponent.prototype.isMy = function (message) {
        return message.sender == this.me;
    };
    ChatComponent.prototype.sendMessage = function () {
        var content = this.newMessage.text;
        if (content == '') {
            return;
        }
        var message = this.initializeMessageWith(content);
        this.messages.push(message);
        this.scrollChatToBottom();
        this.dismissKeyBoard();
    };
    ChatComponent.prototype.initializeMessageWith = function (content) {
        return {
            content: content,
            sender: this.me,
            date: new Date()
        };
    };
    ChatComponent.prototype.scrollChatToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.chatBox.scrollToIndex(_this.messages.length - 1);
        }, 0);
    };
    ChatComponent.prototype.dismissKeyBoard = function () {
        this.newMessage.text = '';
        this.chatBox.focus();
    };
    return ChatComponent;
}());
__decorate([
    core_1.ViewChild('chatBox'),
    __metadata("design:type", core_1.ElementRef)
], ChatComponent.prototype, "chatBoxRef", void 0);
__decorate([
    core_1.ViewChild('newMessage'),
    __metadata("design:type", core_1.ElementRef)
], ChatComponent.prototype, "newMessageRef", void 0);
ChatComponent = __decorate([
    core_1.Component({
        selector: 'tc-chat',
        styleUrls: ['chat.component.css'],
        templateUrl: 'chat.component.html',
        providers: [chat_service_1.ChatService]
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0JBQXdCO0FBQ3hCLHNDQUFpRTtBQUNqRSwrQ0FBNEQ7QUFVNUQsSUFBYSxhQUFhO0lBa0J0Qix1QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEMsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBR25DLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFsQkQsc0JBQVksa0NBQU87YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFJRCxzQkFBWSxxQ0FBVTthQUF0QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQVdNLG1DQUFXLEdBQWxCLFVBQW1CLE9BQWdCO1FBQy9CLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUVuRCxNQUFNLENBQUMsaUJBQWUsTUFBUSxDQUFDO0lBQ25DLENBQUM7SUFFTyw0QkFBSSxHQUFaLFVBQWEsT0FBZ0I7UUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ00sbUNBQVcsR0FBbEI7UUFDSSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNyQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sNkNBQXFCLEdBQTdCLFVBQThCLE9BQWU7UUFDekMsTUFBTSxDQUFDO1lBQ0gsT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2YsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1NBQ25CLENBQUM7SUFDTixDQUFDO0lBRU8sMENBQWtCLEdBQTFCO1FBQUEsaUJBSUM7UUFIRyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRU8sdUNBQWUsR0FBdkI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBSUwsb0JBQUM7QUFBRCxDQUFDLEFBcEVELElBb0VDO0FBOUR5QjtJQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQzs4QkFBYSxpQkFBVTtpREFBQztBQU1wQjtJQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQzs4QkFBZ0IsaUJBQVU7b0RBQUM7QUFaMUMsYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFDbkIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDakMsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQzNCLENBQUM7cUNBbUJtQywwQkFBVztHQWxCbkMsYUFBYSxDQW9FekI7QUFwRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvY2hhdC5jb21wb25lbnQudHNcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGF0U2VydmljZSwgVXNlciwgTWVzc2FnZSB9IGZyb20gJy4vY2hhdC5zZXJ2aWNlJztcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndWkvbGlzdC12aWV3JztcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSAndWkvdGV4dC12aWV3JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0Yy1jaGF0JyxcbiAgICBzdHlsZVVybHM6IFsnY2hhdC5jb21wb25lbnQuY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICdjaGF0LmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtDaGF0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCB7XG4gICAgcHVibGljIG1lOiBVc2VyO1xuICAgIHB1YmxpYyBvdGhlcjogVXNlcjtcbiAgICBwdWJsaWMgbWVzc2FnZXM6IEFycmF5PE1lc3NhZ2U+O1xuXG5cbiAgICBAVmlld0NoaWxkKCdjaGF0Qm94JykgY2hhdEJveFJlZjogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgZ2V0IGNoYXRCb3goKTogTGlzdFZpZXcge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGF0Qm94UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZCgnbmV3TWVzc2FnZScpIG5ld01lc3NhZ2VSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIGdldCBuZXdNZXNzYWdlKCk6IFRleHRWaWV3IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV3TWVzc2FnZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhdFNlcnZpY2U6IENoYXRTZXJ2aWNlKSB7XG4gICAgICAgIGNvbnN0IGNoYXQgPSBjaGF0U2VydmljZS5nZXRDaGF0KCk7XG5cblxuICAgICAgICB0aGlzLm1lID0gY2hhdC5wYXJ0aWNpcGFudHMubWU7XG4gICAgICAgIHRoaXMub3RoZXIgPSBjaGF0LnBhcnRpY2lwYW50cy5vdGhlcjtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IGNoYXQubWVzc2FnZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWVuc2FqZXNcIiwgdGhpcy5tZXNzYWdlcyk7XG4gICAgfVxuICAgIHB1YmxpYyBidWJibGVDbGFzcyhtZXNzYWdlOiBNZXNzYWdlKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc2VuZGVyID0gdGhpcy5pc015KG1lc3NhZ2UpID8gJ21lJyA6ICdvdGhlcic7XG5cbiAgICAgICAgcmV0dXJuIGBidWJibGUtZnJvbS0ke3NlbmRlcn1gO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNNeShtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlLnNlbmRlciA9PSB0aGlzLm1lO1xuICAgIH1cbiAgICBwdWJsaWMgc2VuZE1lc3NhZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLm5ld01lc3NhZ2UudGV4dDtcbiAgICAgICAgaWYgKGNvbnRlbnQgPT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5pbml0aWFsaXplTWVzc2FnZVdpdGgoY29udGVudCk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5zY3JvbGxDaGF0VG9Cb3R0b20oKTtcbiAgICAgICAgdGhpcy5kaXNtaXNzS2V5Qm9hcmQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVNZXNzYWdlV2l0aChjb250ZW50OiBzdHJpbmcpOiBNZXNzYWdlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICBzZW5kZXI6IHRoaXMubWUsXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzY3JvbGxDaGF0VG9Cb3R0b20oKTogdm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGF0Qm94LnNjcm9sbFRvSW5kZXgodGhpcy5tZXNzYWdlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkaXNtaXNzS2V5Qm9hcmQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubmV3TWVzc2FnZS50ZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuY2hhdEJveC5mb2N1cygpO1xuICAgIH1cblxuXG5cbn0iXX0=