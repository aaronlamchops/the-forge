"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var navigation = require("../navigation/navigation");
function pageLoaded(args) {
    var page = args.object;
    var source = observable_1.fromObject({
        nav_back: navigation.navigate_back
    });
    // if (page.ios) {
    //     let controller = frame.topmost().ios.controller;
    //     let navigationBar = controller.navigationBar;
    //     navigationBar.barStyle = 1;
    // }
    page.bindingContext = source;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpYnJhcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBd0Q7QUFJeEQscURBQXVEO0FBR3ZELG9CQUFvQixJQUFlO0lBRS9CLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsSUFBSSxNQUFNLEdBQUcsdUJBQVUsQ0FBQztRQUNwQixRQUFRLEVBQUUsVUFBVSxDQUFDLGFBQWE7S0FDckMsQ0FBQyxDQUFDO0lBRUgsa0JBQWtCO0lBQ2xCLHVEQUF1RDtJQUN2RCxvREFBb0Q7SUFFcEQsa0NBQWtDO0lBQ2xDLElBQUk7SUFFSixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztBQUNqQyxDQUFDO0FBRVEsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xuXG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uIGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG5cblxuZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcblxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgbGV0IHNvdXJjZSA9IGZyb21PYmplY3Qoe1xuICAgICAgICBuYXZfYmFjazogbmF2aWdhdGlvbi5uYXZpZ2F0ZV9iYWNrXG4gICAgfSk7XG5cbiAgICAvLyBpZiAocGFnZS5pb3MpIHtcbiAgICAvLyAgICAgbGV0IGNvbnRyb2xsZXIgPSBmcmFtZS50b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXI7XG4gICAgLy8gICAgIGxldCBuYXZpZ2F0aW9uQmFyID0gY29udHJvbGxlci5uYXZpZ2F0aW9uQmFyO1xuXG4gICAgLy8gICAgIG5hdmlnYXRpb25CYXIuYmFyU3R5bGUgPSAxO1xuICAgIC8vIH1cbiAgICBcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gc291cmNlO1xufVxuXG5leHBvcnQgeyBwYWdlTG9hZGVkIH07Il19