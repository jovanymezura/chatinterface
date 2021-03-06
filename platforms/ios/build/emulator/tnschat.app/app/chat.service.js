"use strict";
var core_1 = require("@angular/core");
var faker = require('faker');
var ChatService = (function () {
    function ChatService() {
    }
    ChatService.prototype.getChat = function () {
        var me = {
            name: 'Me',
            pictureUrl: 'https://unsplash.it/100/100?image=837',
            coverUrl: ''
        };
        var other = {
            name: faker.name.findName(),
            pictureUrl: 'https://unsplash.it/100/100?image=823',
            coverUrl: 'https://unsplash.it/500/500?image=857',
        };
        var messages = [];
        for (var i = 0; i < 4; i++) {
            var sender = faker.random.boolean() ? me : other;
            var content = faker.lorem.sentence();
            var date = faker.date.recent();
            messages.push({
                sender: sender,
                content: content,
                date: date
            });
        }
        var chat = {
            participants: {
                me: me,
                other: other
            },
            messages: messages.sort(function (a, b) {
                return a.date - b.date;
            })
        };
        return chat;
    };
    return ChatService;
}());
ChatService = __decorate([
    core_1.Injectable()
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0MsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRy9CLElBQWEsV0FBVztJQUF4QjtJQXdDQSxDQUFDO0lBdkNDLDZCQUFPLEdBQVA7UUFDRSxJQUFNLEVBQUUsR0FBRztZQUNULElBQUksRUFBRSxJQUFJO1lBQ1YsVUFBVSxFQUFFLHVDQUF1QztZQUNuRCxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFDRixJQUFNLEtBQUssR0FBRztZQUNaLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMzQixVQUFVLEVBQUUsdUNBQXVDO1lBQ25ELFFBQVEsRUFBRSx1Q0FBdUM7U0FDbEQsQ0FBQztRQUVGLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNCLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUNuRCxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFakMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDWixNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsSUFBSSxFQUFFLElBQUk7YUFDWCxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsSUFBTSxJQUFJLEdBQUc7WUFDWCxZQUFZLEVBQUU7Z0JBQ1osRUFBRSxFQUFFLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLEtBQUs7YUFDYjtZQUNELFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekIsQ0FBQyxDQUFDO1NBR0gsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtHQUNBLFdBQVcsQ0F3Q3ZCO0FBeENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuY29uc3QgZmFrZXIgPSByZXF1aXJlKCdmYWtlcicpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhdFNlcnZpY2Uge1xuICBnZXRDaGF0KCk6IENoYXQge1xuICAgIGNvbnN0IG1lID0ge1xuICAgICAgbmFtZTogJ01lJyxcbiAgICAgIHBpY3R1cmVVcmw6ICdodHRwczovL3Vuc3BsYXNoLml0LzEwMC8xMDA/aW1hZ2U9ODM3JyxcbiAgICAgIGNvdmVyVXJsOiAnJ1xuICAgIH07XG4gICAgY29uc3Qgb3RoZXIgPSB7XG4gICAgICBuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXG4gICAgICBwaWN0dXJlVXJsOiAnaHR0cHM6Ly91bnNwbGFzaC5pdC8xMDAvMTAwP2ltYWdlPTgyMycsXG4gICAgICBjb3ZlclVybDogJ2h0dHBzOi8vdW5zcGxhc2guaXQvNTAwLzUwMD9pbWFnZT04NTcnLFxuICAgIH07XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICBjb25zdCBzZW5kZXIgPSBmYWtlci5yYW5kb20uYm9vbGVhbigpID8gbWUgOiBvdGhlcjtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBmYWtlci5sb3JlbS5zZW50ZW5jZSgpO1xuICAgICAgY29uc3QgZGF0ZSA9IGZha2VyLmRhdGUucmVjZW50KCk7XG5cbiAgICAgIG1lc3NhZ2VzLnB1c2goe1xuICAgICAgICBzZW5kZXI6IHNlbmRlcixcbiAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgZGF0ZTogZGF0ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhdCA9IHtcbiAgICAgIHBhcnRpY2lwYW50czoge1xuICAgICAgICBtZTogbWUsXG4gICAgICAgIG90aGVyOiBvdGhlclxuICAgICAgfSxcbiAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBhLmRhdGUgLSBiLmRhdGU7XG4gICAgICB9KVxuICAgICAgXG4gICAgICBcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNoYXQ7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwaWN0dXJlVXJsOiBzdHJpbmc7XG4gIGNvdmVyVXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XG4gIHNlbmRlcjogVXNlcjtcbiAgY29udGVudDogc3RyaW5nO1xuICBkYXRlOiBEYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnRpY2lwYW50cyB7XG4gIG1lOiBVc2VyO1xuICBvdGhlcjogVXNlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGF0IHtcbiAgcGFydGljaXBhbnRzOiBQYXJ0aWNpcGFudHM7XG4gIG1lc3NhZ2VzOiBBcnJheTxNZXNzYWdlPjtcbn0iXX0=