"use strict";
var core_1 = require("@angular/core");
var moment = require("moment");
var TimeAgoPipe = (function () {
    function TimeAgoPipe() {
    }
    TimeAgoPipe.prototype.transform = function (date, args) {
        return moment(date).fromNow();
    };
    return TimeAgoPipe;
}());
TimeAgoPipe = __decorate([
    core_1.Pipe({
        name: 'timeAgo'
    })
], TimeAgoPipe);
exports.TimeAgoPipe = TimeAgoPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZ28ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWUtYWdvLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFvRDtBQUNwRCwrQkFBaUM7QUFLakMsSUFBYSxXQUFXO0lBQXhCO0lBS0EsQ0FBQztJQUhDLCtCQUFTLEdBQVQsVUFBVSxJQUFVLEVBQUUsSUFBVztRQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksV0FBVztJQUh2QixXQUFJLENBQUM7UUFDSixJQUFJLEVBQUUsU0FBUztLQUNoQixDQUFDO0dBQ1csV0FBVyxDQUt2QjtBQUxZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG4gXG5AUGlwZSh7XG4gIG5hbWU6ICd0aW1lQWdvJ1xufSlcbmV4cG9ydCBjbGFzcyBUaW1lQWdvUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuIFxuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZSwgYXJnczogYW55W10pIHtcbiAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZyb21Ob3coKTtcbiAgfVxufSJdfQ==