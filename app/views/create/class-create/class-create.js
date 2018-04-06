"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var navigation = require("../../navigation/navigation");
var classViewModel_1 = require("../../../view-models/classViewModel");
var ClassModal = 'views/class-modal/class-modal';
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
                        nav_next: navigation.navigate_back,
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
function displayInfo(args) {
    var page = args.object.page;
    var sender = args.object;
    var context = {
        _className: sender.id
    };
    page.showModal(ClassModal, context, function () {
        console.log("closed");
    }, true);
}
exports.displayInfo = displayInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3MtY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQW9FO0FBVXBFLHdEQUEwRDtBQUMxRCxzRUFBcUU7QUFDckUsSUFBTSxVQUFVLEdBQUcsK0JBQStCLENBQUM7QUFFbkQsSUFBSSxlQUFlLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7QUFHM0Msb0JBQTBCLElBQWU7Ozs7OztvQkFFakMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsZUFBZSxDQUFDO29CQUV0QyxxQkFBTSxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7b0JBQXhDLFNBQXdDLENBQUM7b0JBR3JDLE1BQU0sR0FBRyx1QkFBVSxDQUFDO3dCQUNwQixRQUFRLEVBQUUsVUFBVSxDQUFDLGFBQWE7d0JBQ2xDLFFBQVEsRUFBRSxVQUFVLENBQUMsYUFBYTt3QkFDbEMsVUFBVSxFQUFFLGVBQWUsQ0FBQyxZQUFZLEVBQUU7cUJBQzdDLENBQUMsQ0FBQztvQkFFSCxrQkFBa0I7b0JBQ2xCLHVEQUF1RDtvQkFDdkQsb0RBQW9EO29CQUVwRCxrQ0FBa0M7b0JBQ2xDLElBQUk7b0JBR0osSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7Ozs7O0NBQ2hDO0FBbUJRLGdDQUFVO0FBakJuQjs7O1lBQ0ksZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7O0NBQzNCO0FBZW9CLG9DQUFZO0FBYmpDLHFCQUFxQixJQUFJO0lBQ3JCLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQUksTUFBTSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFcEMsSUFBSSxPQUFPLEdBQUc7UUFDVixVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUU7S0FDeEIsQ0FBQztJQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRTtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNiLENBQUM7QUFFa0Msa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IFBhZ2UsIENvbG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndWkvbGFiZWwnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndWkvYnV0dG9uJztcbmltcG9ydCB7IExpc3RWaWV3LCBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XG5pbXBvcnQgKiBhcyB2aWV3IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd1aS9mcmFtZSc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuaW1wb3J0ICogYXMgbmF2aWdhdGlvbiBmcm9tICcuLi8uLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgQ2xhc3NWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi8uLi92aWV3LW1vZGVscy9jbGFzc1ZpZXdNb2RlbCc7XG5jb25zdCBDbGFzc01vZGFsID0gJ3ZpZXdzL2NsYXNzLW1vZGFsL2NsYXNzLW1vZGFsJztcblxubGV0IF9jbGFzc1ZpZXdNb2RlbCA9IG5ldyBDbGFzc1ZpZXdNb2RlbCgpO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG5cbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBfY2xhc3NWaWV3TW9kZWw7XG5cbiAgICBhd2FpdCBfY2xhc3NWaWV3TW9kZWwucmVzb2x2ZUNsYXNzRGF0YSgpO1xuICAgIC8vIGNvbnNvbGUubG9nKGFwcFNldHRpbmdzLmdldFN0cmluZygnX3JhY2VDaG9zZW4nKSk7XG5cbiAgICBsZXQgc291cmNlID0gZnJvbU9iamVjdCh7XG4gICAgICAgIG5hdl9uZXh0OiBuYXZpZ2F0aW9uLm5hdmlnYXRlX2JhY2ssXG4gICAgICAgIG5hdl9iYWNrOiBuYXZpZ2F0aW9uLm5hdmlnYXRlX2JhY2ssXG4gICAgICAgIGNsYXNzX2xpc3Q6IF9jbGFzc1ZpZXdNb2RlbC5nZXRDbGFzc0RhdGEoKVxuICAgIH0pO1xuXG4gICAgLy8gaWYgKHBhZ2UuaW9zKSB7XG4gICAgLy8gICAgIGxldCBjb250cm9sbGVyID0gZnJhbWUudG9wbW9zdCgpLmlvcy5jb250cm9sbGVyO1xuICAgIC8vICAgICBsZXQgbmF2aWdhdGlvbkJhciA9IGNvbnRyb2xsZXIubmF2aWdhdGlvbkJhcjtcblxuICAgIC8vICAgICBuYXZpZ2F0aW9uQmFyLmJhclN0eWxlID0gMTtcbiAgICAvLyB9XG4gICAgXG4gICAgXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHNvdXJjZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGVBd2F5KCkge1xuICAgIF9jbGFzc1ZpZXdNb2RlbC5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW5mbyhhcmdzKTogdm9pZCB7XG4gICAgbGV0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xuICAgIGxldCBzZW5kZXIgPSA8dmlldy5WaWV3PmFyZ3Mub2JqZWN0O1xuXG4gICAgbGV0IGNvbnRleHQgPSB7XG4gICAgICAgIF9jbGFzc05hbWU6IHNlbmRlci5pZFxuICAgIH07XG4gICAgXG4gICAgcGFnZS5zaG93TW9kYWwoQ2xhc3NNb2RhbCwgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsb3NlZFwiKTtcbiAgICB9LCB0cnVlKTtcbn1cblxuZXhwb3J0IHsgcGFnZUxvYWRlZCwgbmF2aWdhdGVBd2F5LCBkaXNwbGF5SW5mbyB9O1xuIl19