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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0JBQXdCO0FBQ3hCLHNDQUFpRTtBQUNqRSwrQ0FBNEQ7QUFVNUQsSUFBYSxhQUFhO0lBa0J0Qix1QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEMsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBR25DLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFsQkQsc0JBQVksa0NBQU87YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFJRCxzQkFBWSxxQ0FBVTthQUF0QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQVdNLG1DQUFXLEdBQWxCLFVBQW1CLE9BQWdCO1FBQy9CLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUVuRCxNQUFNLENBQUMsaUJBQWUsTUFBUSxDQUFDO0lBQ25DLENBQUM7SUFFTyw0QkFBSSxHQUFaLFVBQWEsT0FBZ0I7UUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBR0wsb0JBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDO0FBaEN5QjtJQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQzs4QkFBYSxpQkFBVTtpREFBQztBQU1wQjtJQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQzs4QkFBZ0IsaUJBQVU7b0RBQUM7QUFaMUMsYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFNBQVM7UUFDbkIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7UUFDakMsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQzNCLENBQUM7cUNBbUJtQywwQkFBVztHQWxCbkMsYUFBYSxDQXNDekI7QUF0Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvY2hhdC5jb21wb25lbnQudHNcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGF0U2VydmljZSwgVXNlciwgTWVzc2FnZSB9IGZyb20gJy4vY2hhdC5zZXJ2aWNlJztcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndWkvbGlzdC12aWV3JztcbmltcG9ydCB7IFRleHRWaWV3IH0gZnJvbSAndWkvdGV4dC12aWV3JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0Yy1jaGF0JyxcbiAgICBzdHlsZVVybHM6IFsnY2hhdC5jb21wb25lbnQuY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICdjaGF0LmNvbXBvbmVudC5odG1sJyxcbiAgICBwcm92aWRlcnM6IFtDaGF0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCB7XG4gICAgcHVibGljIG1lOiBVc2VyO1xuICAgIHB1YmxpYyBvdGhlcjogVXNlcjtcbiAgICBwdWJsaWMgbWVzc2FnZXM6IEFycmF5PE1lc3NhZ2U+O1xuXG5cbiAgICBAVmlld0NoaWxkKCdjaGF0Qm94JykgY2hhdEJveFJlZjogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgZ2V0IGNoYXRCb3goKTogTGlzdFZpZXcge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGF0Qm94UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZCgnbmV3TWVzc2FnZScpIG5ld01lc3NhZ2VSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIGdldCBuZXdNZXNzYWdlKCk6IFRleHRWaWV3IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmV3TWVzc2FnZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhdFNlcnZpY2U6IENoYXRTZXJ2aWNlKSB7XG4gICAgICAgIGNvbnN0IGNoYXQgPSBjaGF0U2VydmljZS5nZXRDaGF0KCk7XG5cblxuICAgICAgICB0aGlzLm1lID0gY2hhdC5wYXJ0aWNpcGFudHMubWU7XG4gICAgICAgIHRoaXMub3RoZXIgPSBjaGF0LnBhcnRpY2lwYW50cy5vdGhlcjtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IGNoYXQubWVzc2FnZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWVuc2FqZXNcIiwgdGhpcy5tZXNzYWdlcyk7XG4gICAgfVxuICAgIHB1YmxpYyBidWJibGVDbGFzcyhtZXNzYWdlOiBNZXNzYWdlKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qgc2VuZGVyID0gdGhpcy5pc015KG1lc3NhZ2UpID8gJ21lJyA6ICdvdGhlcic7XG5cbiAgICAgICAgcmV0dXJuIGBidWJibGUtZnJvbS0ke3NlbmRlcn1gO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNNeShtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlLnNlbmRlciA9PSB0aGlzLm1lO1xuICAgIH1cblxuXG59Il19