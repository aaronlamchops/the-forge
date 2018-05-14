"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var classViewModel_1 = require("../../view-models/classViewModel");
var context;
var closeCallback;
var _classViewModel = new classViewModel_1.ClassViewModel();
var details = "";
function onLoaded(args) {
    console.log("ClassModal.onLoaded");
    var page = args.object;
}
exports.onLoaded = onLoaded;
function onUnloaded() {
    console.log("ClassModal.onUnloaded");
    _classViewModel.reset();
    details = "";
}
exports.onUnloaded = onUnloaded;
function onShownModally(args) {
    return __awaiter(this, void 0, void 0, function () {
        var page, source;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("ClassModal.onShownModally, context: " + args.context);
                    context = args.context;
                    closeCallback = args.closeCallback;
                    page = args.object;
                    page.bindingContext = _classViewModel;
                    return [4 /*yield*/, _classViewModel.resolveClassData()];
                case 1:
                    _a.sent(); // HTTP call to fetch race data from JSON
                    getDetails();
                    source = observable_1.fromObject({
                        className: context._className,
                        classDetails: details
                    });
                    page.bindingContext = source;
                    return [2 /*return*/];
            }
        });
    });
}
exports.onShownModally = onShownModally;
function closeModal(args) {
    closeCallback();
}
exports.closeModal = closeModal;
;
function getDetails() {
    _classViewModel.getClassData().forEach(function (element) {
        var obj = element;
        details += obj.toString();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtbW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGFzcy1tb2RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDhDQUFvRTtBQU1wRSxtRUFBa0U7QUFJbEUsSUFBSSxPQUFZLENBQUM7QUFDakIsSUFBSSxhQUF1QixDQUFDO0FBQzVCLElBQUksZUFBZSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQzNDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUVqQixrQkFBeUIsSUFBZTtJQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFFbkMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUNqQyxDQUFDO0FBSkQsNEJBSUM7QUFFRDtJQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNyQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNqQixDQUFDO0FBSkQsZ0NBSUM7QUFFRCx3QkFBcUMsSUFBSTs7Ozs7O29CQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkUsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ3ZCLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUUvQixJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUM7b0JBRXRDLHFCQUFNLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOztvQkFBeEMsU0FBd0MsQ0FBQyxDQUFXLHlDQUF5QztvQkFDN0YsVUFBVSxFQUFFLENBQUM7b0JBRVQsTUFBTSxHQUFHLHVCQUFVLENBQUM7d0JBQ3BCLFNBQVMsRUFBRSxPQUFPLENBQUMsVUFBVTt3QkFDN0IsWUFBWSxFQUFFLE9BQU87cUJBQ3hCLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Q0FDaEM7QUFqQkQsd0NBaUJDO0FBRUQsb0JBQTJCLElBQUk7SUFDM0IsYUFBYSxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQUZELGdDQUVDO0FBQUEsQ0FBQztBQUVGO0lBQ0ksZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87UUFDMUMsSUFBSSxHQUFHLEdBQUcsT0FBZ0IsQ0FBQztRQUMzQixPQUFPLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UsIFNob3duTW9kYWxseURhdGF9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndWkvbGFiZWwnO1xuaW1wb3J0ICogYXMgdmlldyBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCB7IENsYXNzVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvY2xhc3NWaWV3TW9kZWwnO1xuaW1wb3J0IHsgQ2xhc3MgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xhc3Nlcy9jbGFzcyc7XG5pbXBvcnQgeyBQcm9maWNpZW5jeSB9IGZyb20gJy4uLy4uL21vZGVscy9jbGFzc2VzL3Byb2ZpY2llbmN5JztcblxudmFyIGNvbnRleHQ6IGFueTtcbnZhciBjbG9zZUNhbGxiYWNrOiBGdW5jdGlvbjtcbmxldCBfY2xhc3NWaWV3TW9kZWwgPSBuZXcgQ2xhc3NWaWV3TW9kZWwoKTtcbmxldCBkZXRhaWxzID0gXCJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiQ2xhc3NNb2RhbC5vbkxvYWRlZFwiKTtcblxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblVubG9hZGVkKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ2xhc3NNb2RhbC5vblVubG9hZGVkXCIpO1xuICAgIF9jbGFzc1ZpZXdNb2RlbC5yZXNldCgpO1xuICAgIGRldGFpbHMgPSBcIlwiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb25TaG93bk1vZGFsbHkoYXJncykge1xuICAgIGNvbnNvbGUubG9nKFwiQ2xhc3NNb2RhbC5vblNob3duTW9kYWxseSwgY29udGV4dDogXCIgKyBhcmdzLmNvbnRleHQpO1xuICAgIGNvbnRleHQgPSBhcmdzLmNvbnRleHQ7XG4gICAgY2xvc2VDYWxsYmFjayA9IGFyZ3MuY2xvc2VDYWxsYmFjaztcblxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IF9jbGFzc1ZpZXdNb2RlbDtcblxuICAgIGF3YWl0IF9jbGFzc1ZpZXdNb2RlbC5yZXNvbHZlQ2xhc3NEYXRhKCk7ICAgICAgICAgICAvLyBIVFRQIGNhbGwgdG8gZmV0Y2ggcmFjZSBkYXRhIGZyb20gSlNPTlxuICAgIGdldERldGFpbHMoKTtcblxuICAgIGxldCBzb3VyY2UgPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgY2xhc3NOYW1lOiBjb250ZXh0Ll9jbGFzc05hbWUsXG4gICAgICAgIGNsYXNzRGV0YWlsczogZGV0YWlsc1xuICAgIH0pO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHNvdXJjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWwoYXJncykgeyAgICAgICAgICAgICAgLy8gY2FsbGJhY2sgdG8gY2xvc2UgbW9kYWxcbiAgICBjbG9zZUNhbGxiYWNrKCk7XG59O1xuXG5mdW5jdGlvbiBnZXREZXRhaWxzKCkge1xuICAgIF9jbGFzc1ZpZXdNb2RlbC5nZXRDbGFzc0RhdGEoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgb2JqID0gZWxlbWVudCBhcyBDbGFzcztcbiAgICAgICAgZGV0YWlscyArPSBvYmoudG9TdHJpbmcoKTtcbiAgICB9KTtcbn0iXX0=