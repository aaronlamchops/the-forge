"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var raceViewModel_1 = require("../../view-models/raceViewModel");
var context;
var closeCallback;
var _raceViewModel = new raceViewModel_1.RaceViewModel();
var details = "";
var _racename;
function onLoaded(args) {
    console.log("RaceModal.onLoaded");
    var page = args.object;
}
exports.onLoaded = onLoaded;
function onUnloaded() {
    console.log("RaceModal.onUnloaded");
    _raceViewModel.reset();
    details = "";
}
exports.onUnloaded = onUnloaded;
function onShownModally(args) {
    return __awaiter(this, void 0, void 0, function () {
        var page, source;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("RaceModal.onShownModally, context: " + args.context._raceName);
                    _racename = args.context._raceName;
                    context = args.context;
                    closeCallback = args.closeCallback;
                    page = args.object;
                    page.bindingContext = _raceViewModel;
                    return [4 /*yield*/, _raceViewModel.resolveRaceData()];
                case 1:
                    _a.sent();
                    getDetails();
                    source = observable_1.fromObject({
                        raceName: context._raceName,
                        raceDetails: details
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
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            _raceViewModel.getRaces().forEach(function (element) {
                var obj = element;
                if (obj.name === _racename) {
                    details += obj.toString();
                }
            });
            return [2 /*return*/];
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFjZS1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJhY2UtbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw4Q0FBb0U7QUFNcEUsaUVBQWdFO0FBR2hFLElBQUksT0FBWSxDQUFDO0FBQ2pCLElBQUksYUFBdUIsQ0FBQztBQUM1QixJQUFJLGNBQWMsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztBQUN6QyxJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUM7QUFDekIsSUFBSSxTQUFpQixDQUFDO0FBRXRCLGtCQUF5QixJQUFlO0lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUVsQyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ2pDLENBQUM7QUFKRCw0QkFJQztBQUVEO0lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3BDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLENBQUM7QUFKRCxnQ0FJQztBQUVELHdCQUFxQyxJQUFJOzs7Ozs7b0JBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDNUUsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO29CQUNuQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDdkIsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBRS9CLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztvQkFFckMscUJBQU0sY0FBYyxDQUFDLGVBQWUsRUFBRSxFQUFBOztvQkFBdEMsU0FBc0MsQ0FBQztvQkFDdkMsVUFBVSxFQUFFLENBQUM7b0JBRVQsTUFBTSxHQUFHLHVCQUFVLENBQUM7d0JBQ3BCLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FBUzt3QkFDM0IsV0FBVyxFQUFFLE9BQU87cUJBQ3ZCLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQzs7Ozs7Q0FDaEM7QUFsQkQsd0NBa0JDO0FBRUQsb0JBQTJCLElBQUk7SUFDM0IsYUFBYSxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQUZELGdDQUVDO0FBQUEsQ0FBQztBQUVGOzs7WUFDSSxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQkFDckMsSUFBSSxHQUFHLEdBQUcsT0FBZSxDQUFDO2dCQUMxQixJQUFHLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFDO29CQUN0QixPQUFPLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUM3QjtZQUNMLENBQUMsQ0FBQyxDQUFDOzs7O0NBQ04iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlLCBTaG93bk1vZGFsbHlEYXRhfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3VpL2xhYmVsJztcbmltcG9ydCAqIGFzIHZpZXcgZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3VpL2ZyYW1lJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgeyBSYWNlVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvcmFjZVZpZXdNb2RlbCc7XG5pbXBvcnQgeyBSYWNlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9yYWNlcy9yYWNlXCI7XG5cbnZhciBjb250ZXh0OiBhbnk7XG52YXIgY2xvc2VDYWxsYmFjazogRnVuY3Rpb247XG5sZXQgX3JhY2VWaWV3TW9kZWwgPSBuZXcgUmFjZVZpZXdNb2RlbCgpO1xubGV0IGRldGFpbHM6IHN0cmluZyA9IFwiXCI7XG5sZXQgX3JhY2VuYW1lOiBzdHJpbmc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJhY2VNb2RhbC5vbkxvYWRlZFwiKTtcblxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblVubG9hZGVkKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUmFjZU1vZGFsLm9uVW5sb2FkZWRcIik7XG4gICAgX3JhY2VWaWV3TW9kZWwucmVzZXQoKTtcbiAgICBkZXRhaWxzID0gXCJcIjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9uU2hvd25Nb2RhbGx5KGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJhY2VNb2RhbC5vblNob3duTW9kYWxseSwgY29udGV4dDogXCIgKyBhcmdzLmNvbnRleHQuX3JhY2VOYW1lKTtcbiAgICBfcmFjZW5hbWUgPSBhcmdzLmNvbnRleHQuX3JhY2VOYW1lO1xuICAgIGNvbnRleHQgPSBhcmdzLmNvbnRleHQ7XG4gICAgY2xvc2VDYWxsYmFjayA9IGFyZ3MuY2xvc2VDYWxsYmFjaztcblxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IF9yYWNlVmlld01vZGVsO1xuXG4gICAgYXdhaXQgX3JhY2VWaWV3TW9kZWwucmVzb2x2ZVJhY2VEYXRhKCk7XG4gICAgZ2V0RGV0YWlscygpO1xuXG4gICAgbGV0IHNvdXJjZSA9IGZyb21PYmplY3Qoe1xuICAgICAgICByYWNlTmFtZTogY29udGV4dC5fcmFjZU5hbWUsXG4gICAgICAgIHJhY2VEZXRhaWxzOiBkZXRhaWxzXG4gICAgfSk7XG5cbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gc291cmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbChhcmdzKSB7ICAgICAgICAgICAgICAvLyBjYWxsYmFjayB0byBjbG9zZSBtb2RhbFxuICAgIGNsb3NlQ2FsbGJhY2soKTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERldGFpbHMoKSB7XG4gICAgX3JhY2VWaWV3TW9kZWwuZ2V0UmFjZXMoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgb2JqID0gZWxlbWVudCBhcyBSYWNlO1xuICAgICAgICBpZihvYmoubmFtZSA9PT0gX3JhY2VuYW1lKXtcbiAgICAgICAgICAgIGRldGFpbHMgKz0gb2JqLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdfQ==