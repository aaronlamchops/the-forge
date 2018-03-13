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
                    page.bindingContext = dataModel;
                    return [4 /*yield*/, dataModel.fetchRacesData()];
                case 1:
                    _a.sent();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFvRTtBQUdwRSxnQ0FBa0M7QUFHbEMscURBQXVEO0FBQ3ZELDJEQUF5RDtBQUd6RCxJQUFJLFNBQVMsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztBQUVoQyxvQkFBMEIsSUFBZTs7Ozs7O29CQUVqQyxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7b0JBRWhDLHFCQUFNLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBQTs7b0JBQWhDLFNBQWdDLENBQUM7b0JBRTdCLE1BQU0sR0FBRyx1QkFBVSxDQUFDO3dCQUNwQixRQUFRLEVBQUUsVUFBVSxDQUFDLGFBQWE7d0JBQ2xDLFNBQVMsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFO3FCQUNsQyxDQUFDLENBQUM7b0JBRUgsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO3dCQUNOLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQzt3QkFDNUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7d0JBRTdDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO3FCQUM5QjtvQkFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Q0FDaEM7QUFPUSxnQ0FBVTtBQUxuQjs7O1lBQ0ksU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7O0NBQ3JCO0FBR29CLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd1aS9mcmFtZSc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuXG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uIGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBEYXRhTW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9kYXRhLW1vZGVsJztcblxuXG5sZXQgZGF0YU1vZGVsID0gbmV3IERhdGFNb2RlbCgpO1xuXG5hc3luYyBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZGF0YU1vZGVsO1xuXG4gICAgYXdhaXQgZGF0YU1vZGVsLmZldGNoUmFjZXNEYXRhKCk7XG5cbiAgICBsZXQgc291cmNlID0gZnJvbU9iamVjdCh7XG4gICAgICAgIG5hdl9iYWNrOiBuYXZpZ2F0aW9uLm5hdmlnYXRlX2JhY2ssXG4gICAgICAgIHJhY2VfbGlzdDogZGF0YU1vZGVsLmdldFJhY2VzKClcbiAgICB9KTtcblxuICAgIGlmIChwYWdlLmlvcykge1xuICAgICAgICBsZXQgY29udHJvbGxlciA9IGZyYW1lLnRvcG1vc3QoKS5pb3MuY29udHJvbGxlcjtcbiAgICAgICAgbGV0IG5hdmlnYXRpb25CYXIgPSBjb250cm9sbGVyLm5hdmlnYXRpb25CYXI7XG5cbiAgICAgICAgbmF2aWdhdGlvbkJhci5iYXJTdHlsZSA9IDE7XG4gICAgfVxuICAgIFxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBzb3VyY2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5hdmlnYXRlQXdheSgpIHtcbiAgICBkYXRhTW9kZWwucmVzZXQoKTtcbn1cblxuXG5leHBvcnQgeyBwYWdlTG9hZGVkLCBuYXZpZ2F0ZUF3YXkgfTsiXX0=