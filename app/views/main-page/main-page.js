"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var navigation = require("../navigation/navigation");
function pageLoaded(args) {
    var page = args.object;
    var source = observable_1.fromObject({
        nav_create: navigation.navigate_create_page,
        nav_library: navigation.navigate_library,
        nav_about: navigation.navigate_about
    });
    // if (page.ios) {
    //     let controller = frame.topmost().ios.controller;
    //     let navigationBar = controller.navigationBar;
    //     navigationBar.barStyle = 1;
    // }
    page.bindingContext = source;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQXdEO0FBSXhELHFEQUF1RDtBQUd2RCxvQkFBb0IsSUFBZTtJQUUvQixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLElBQUksTUFBTSxHQUFHLHVCQUFVLENBQUM7UUFDcEIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxvQkFBb0I7UUFDM0MsV0FBVyxFQUFFLFVBQVUsQ0FBQyxnQkFBZ0I7UUFDeEMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxjQUFjO0tBQ3ZDLENBQUMsQ0FBQztJQUVILGtCQUFrQjtJQUNsQix1REFBdUQ7SUFDdkQsb0RBQW9EO0lBRXBELGtDQUFrQztJQUNsQyxJQUFJO0lBRUosSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7QUFDakMsQ0FBQztBQUVRLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3VpL2ZyYW1lJztcblxuaW1wb3J0ICogYXMgbmF2aWdhdGlvbiBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24nO1xuXG5cbmZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG5cbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGxldCBzb3VyY2UgPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgbmF2X2NyZWF0ZTogbmF2aWdhdGlvbi5uYXZpZ2F0ZV9jcmVhdGVfcGFnZSxcbiAgICAgICAgbmF2X2xpYnJhcnk6IG5hdmlnYXRpb24ubmF2aWdhdGVfbGlicmFyeSxcbiAgICAgICAgbmF2X2Fib3V0OiBuYXZpZ2F0aW9uLm5hdmlnYXRlX2Fib3V0XG4gICAgfSk7XG5cbiAgICAvLyBpZiAocGFnZS5pb3MpIHtcbiAgICAvLyAgICAgbGV0IGNvbnRyb2xsZXIgPSBmcmFtZS50b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXI7XG4gICAgLy8gICAgIGxldCBuYXZpZ2F0aW9uQmFyID0gY29udHJvbGxlci5uYXZpZ2F0aW9uQmFyO1xuXG4gICAgLy8gICAgIG5hdmlnYXRpb25CYXIuYmFyU3R5bGUgPSAxO1xuICAgIC8vIH1cbiAgICBcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gc291cmNlO1xufVxuXG5leHBvcnQgeyBwYWdlTG9hZGVkIH07Il19