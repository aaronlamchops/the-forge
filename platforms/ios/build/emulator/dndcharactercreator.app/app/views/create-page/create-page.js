"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var frame = require("ui/frame");
var navigation = require("../navigation/navigation");
var data_model_1 = require("../../view-models/data-model");
var dataModel = new data_model_1.DataModel();
function pageLoaded(args) {
    return __awaiter(this, void 0, void 0, function () {
        var page, source, controller, navigationBar;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = args.object;
                    return [4 /*yield*/, dataModel.fetchRacesData()];
                case 1:
                    _a.sent();
                    dataModel.getRaces().forEach(function (element) {
                        console.log(JSON.stringify(element));
                    });
                    source = observable_1.fromObject({
                        nav_back: navigation.navigate_back,
                        race_list: dataModel.getRaces()
                    });
                    if (page.ios) {
                        controller = frame.topmost().ios.controller;
                        navigationBar = controller.navigationBar;
                        navigationBar.barStyle = 1;
                    }
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
            dataModel.reset();
            return [2 /*return*/];
        });
    });
}
exports.navigateAway = navigateAway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUF3RDtBQUd4RCxnQ0FBa0M7QUFHbEMscURBQXVEO0FBQ3ZELDJEQUF5RDtBQUd6RCxJQUFJLFNBQVMsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztBQUVoQyxvQkFBMEIsSUFBZTs7Ozs7O29CQUVqQyxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFFN0IscUJBQU0sU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFBOztvQkFBaEMsU0FBZ0MsQ0FBQztvQkFFakMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87d0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxDQUFDLENBQUMsQ0FBQztvQkFFQyxNQUFNLEdBQUcsdUJBQVUsQ0FBQzt3QkFDcEIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxhQUFhO3dCQUNsQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRTtxQkFDbEMsQ0FBQyxDQUFDO29CQUVILElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTt3QkFDTixVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7d0JBQzVDLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO3dCQUU3QyxhQUFhLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztxQkFDOUI7b0JBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7Ozs7O0NBRWhDO0FBa0JRLGdDQUFVO0FBaEJuQjs7O1lBQ0ksU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7O0NBQ3JCO0FBY29CLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd1aS9mcmFtZSc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuXG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uIGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBEYXRhTW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9kYXRhLW1vZGVsJztcblxuXG5sZXQgZGF0YU1vZGVsID0gbmV3IERhdGFNb2RlbCgpO1xuXG5hc3luYyBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIGF3YWl0IGRhdGFNb2RlbC5mZXRjaFJhY2VzRGF0YSgpO1xuXG4gICAgZGF0YU1vZGVsLmdldFJhY2VzKCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZWxlbWVudCkpO1xuICAgIH0pO1xuXG4gICAgbGV0IHNvdXJjZSA9IGZyb21PYmplY3Qoe1xuICAgICAgICBuYXZfYmFjazogbmF2aWdhdGlvbi5uYXZpZ2F0ZV9iYWNrLFxuICAgICAgICByYWNlX2xpc3Q6IGRhdGFNb2RlbC5nZXRSYWNlcygpXG4gICAgfSk7XG5cbiAgICBpZiAocGFnZS5pb3MpIHtcbiAgICAgICAgbGV0IGNvbnRyb2xsZXIgPSBmcmFtZS50b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXI7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uQmFyID0gY29udHJvbGxlci5uYXZpZ2F0aW9uQmFyO1xuXG4gICAgICAgIG5hdmlnYXRpb25CYXIuYmFyU3R5bGUgPSAxO1xuICAgIH1cbiAgICBcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gc291cmNlO1xuICAgIFxufVxuXG5hc3luYyBmdW5jdGlvbiBuYXZpZ2F0ZUF3YXkoKSB7XG4gICAgZGF0YU1vZGVsLnJlc2V0KCk7XG59XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGdldF9kYXRhKCkge1xuLy8gICAgIHZhciByZXN1bHQ6IGFueTtcbi8vICAgICBhd2FpdCBodHRwLmdldEpTT04oXCJodHRwOi8vMTI3LjAuMC4xOjU5ODQvdGhlLWZvcmdlLzc0NDY4ZTdkOTliODNlOGNiYjVjOGEwMTBkMDA0MDc2XCIpXG4vLyAgICAgLnRoZW4oZnVuY3Rpb24gKHI6IGFueSkge1xuLy8gICAgICAgICByZXN1bHQgPSBuZXcgRGF0YU1vZGVsKHIuX2lkLCByLl9yZXYsIHIucmFjZXMpO1xuLy8gICAgIH0pXG4vLyAgICAgLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuLy8gICAgIH0pO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyB9XG5cbmV4cG9ydCB7IHBhZ2VMb2FkZWQsIG5hdmlnYXRlQXdheSB9OyJdfQ==