"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var navigation = require("../../navigation/navigation");
var classViewModel_1 = require("../../../view-models/classViewModel");
var _classViewModel = new classViewModel_1.ClassViewModel();
function pageLoaded(args) {
    return __awaiter(this, void 0, void 0, function () {
        var page, source;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = args.object;
                    page.bindingContext = _classViewModel;
                    return [4 /*yield*/, _classViewModel.resolveClassData()];
                case 1:
                    _a.sent();
                    source = observable_1.fromObject({
                        nav_next: navigation.navigate_class_create,
                        nav_back: navigation.navigate_back,
                        class_list: _classViewModel.getClassData()
                    });
                    // if (page.ios) {
                    //     let controller = frame.topmost().ios.controller;
                    //     let navigationBar = controller.navigationBar;
                    //     navigationBar.barStyle = 1;
                    // }
                    page.bindingContext = source;
                    return [2 /*return*/];
            }
        });
    });
}
exports.pageLoaded = pageLoaded;
function navigateAway() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _classViewModel.reset();
            return [2 /*return*/];
        });
    });
}
exports.navigateAway = navigateAway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3MtY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQW9FO0FBVXBFLHdEQUEwRDtBQUMxRCxzRUFBcUU7QUFHckUsSUFBSSxlQUFlLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7QUFHM0Msb0JBQTBCLElBQWU7Ozs7OztvQkFFakMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBZSxDQUFDO29CQUV0QyxxQkFBTSxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7b0JBQXhDLFNBQXdDLENBQUM7b0JBR3JDLE1BQU0sR0FBRyx1QkFBVSxDQUFDO3dCQUNwQixRQUFRLEVBQUUsVUFBVSxDQUFDLHFCQUFxQjt3QkFDMUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxhQUFhO3dCQUNsQyxVQUFVLEVBQUUsZUFBZSxDQUFDLFlBQVksRUFBRTtxQkFDN0MsQ0FBQyxDQUFDO29CQUVILGtCQUFrQjtvQkFDbEIsdURBQXVEO29CQUN2RCxvREFBb0Q7b0JBRXBELGtDQUFrQztvQkFDbEMsSUFBSTtvQkFHSixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Q0FDaEM7QUFRUSxnQ0FBVTtBQU5uQjs7O1lBQ0ksZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7O0NBQzNCO0FBSW9CLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBQYWdlLCBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3VpL2xhYmVsJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3VpL2J1dHRvbic7XG5pbXBvcnQgeyBMaXN0VmlldywgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xuaW1wb3J0ICogYXMgdmlldyBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcbmltcG9ydCAqIGFzIG5hdmlnYXRpb24gZnJvbSAnLi4vLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IENsYXNzVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vdmlldy1tb2RlbHMvY2xhc3NWaWV3TW9kZWwnO1xuXG5cbmxldCBfY2xhc3NWaWV3TW9kZWwgPSBuZXcgQ2xhc3NWaWV3TW9kZWwoKTtcblxuXG5hc3luYyBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gX2NsYXNzVmlld01vZGVsO1xuXG4gICAgYXdhaXQgX2NsYXNzVmlld01vZGVsLnJlc29sdmVDbGFzc0RhdGEoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ19yYWNlQ2hvc2VuJykpO1xuXG4gICAgbGV0IHNvdXJjZSA9IGZyb21PYmplY3Qoe1xuICAgICAgICBuYXZfbmV4dDogbmF2aWdhdGlvbi5uYXZpZ2F0ZV9jbGFzc19jcmVhdGUsXG4gICAgICAgIG5hdl9iYWNrOiBuYXZpZ2F0aW9uLm5hdmlnYXRlX2JhY2ssXG4gICAgICAgIGNsYXNzX2xpc3Q6IF9jbGFzc1ZpZXdNb2RlbC5nZXRDbGFzc0RhdGEoKVxuICAgIH0pO1xuXG4gICAgLy8gaWYgKHBhZ2UuaW9zKSB7XG4gICAgLy8gICAgIGxldCBjb250cm9sbGVyID0gZnJhbWUudG9wbW9zdCgpLmlvcy5jb250cm9sbGVyO1xuICAgIC8vICAgICBsZXQgbmF2aWdhdGlvbkJhciA9IGNvbnRyb2xsZXIubmF2aWdhdGlvbkJhcjtcblxuICAgIC8vICAgICBuYXZpZ2F0aW9uQmFyLmJhclN0eWxlID0gMTtcbiAgICAvLyB9XG4gICAgXG4gICAgXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHNvdXJjZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGVBd2F5KCkge1xuICAgIF9jbGFzc1ZpZXdNb2RlbC5yZXNldCgpO1xufVxuXG5cblxuZXhwb3J0IHsgcGFnZUxvYWRlZCwgbmF2aWdhdGVBd2F5IH07Il19