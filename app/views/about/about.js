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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhYm91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUF3RDtBQUl4RCxxREFBdUQ7QUFHdkQsb0JBQW9CLElBQWU7SUFFL0IsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixJQUFJLE1BQU0sR0FBRyx1QkFBVSxDQUFDO1FBQ3BCLFFBQVEsRUFBRSxVQUFVLENBQUMsYUFBYTtLQUNyQyxDQUFDLENBQUM7SUFFSCxrQkFBa0I7SUFDbEIsdURBQXVEO0lBQ3ZELG9EQUFvRDtJQUVwRCxrQ0FBa0M7SUFDbEMsSUFBSTtJQUVKLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0FBQ2pDLENBQUM7QUFFUSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd1aS9mcmFtZSc7XG5cbmltcG9ydCAqIGFzIG5hdmlnYXRpb24gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJztcblxuXG5mdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBsZXQgc291cmNlID0gZnJvbU9iamVjdCh7XG4gICAgICAgIG5hdl9iYWNrOiBuYXZpZ2F0aW9uLm5hdmlnYXRlX2JhY2tcbiAgICB9KTtcblxuICAgIC8vIGlmIChwYWdlLmlvcykge1xuICAgIC8vICAgICBsZXQgY29udHJvbGxlciA9IGZyYW1lLnRvcG1vc3QoKS5pb3MuY29udHJvbGxlcjtcbiAgICAvLyAgICAgbGV0IG5hdmlnYXRpb25CYXIgPSBjb250cm9sbGVyLm5hdmlnYXRpb25CYXI7XG5cbiAgICAvLyAgICAgbmF2aWdhdGlvbkJhci5iYXJTdHlsZSA9IDE7XG4gICAgLy8gfVxuICAgIFxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBzb3VyY2U7XG59XG5cbmV4cG9ydCB7IHBhZ2VMb2FkZWQgfTsiXX0=