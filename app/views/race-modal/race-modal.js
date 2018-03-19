"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var frame = require("ui/frame");
var data_model_1 = require("../../view-models/data-model");
var context;
var closeCallback;
var dataModel = new data_model_1.DataModel();
var details = "";
function onLoaded(args) {
    console.log("RaceModal.onLoaded");
    var page = args.object;
    if (page.ios) {
        var controller = frame.topmost().ios.controller;
        var navigationBar = controller.navigationBar;
        navigationBar.barStyle = 1;
    }
}
exports.onLoaded = onLoaded;
function onUnloaded() {
    console.log("RaceModal.onUnloaded");
    dataModel.reset();
    details = "";
}
exports.onUnloaded = onUnloaded;
function onShownModally(args) {
    return __awaiter(this, void 0, void 0, function () {
        var page, source;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("RaceModal.onShownModally, context: " + args.context);
                    context = args.context;
                    closeCallback = args.closeCallback;
                    page = args.object;
                    page.bindingContext = dataModel;
                    return [4 /*yield*/, dataModel.fetchRacesData()];
                case 1:
                    _a.sent(); // HTTP call to fetch race data from JSON
                    return [4 /*yield*/, getDetails(context._raceName)];
                case 2:
                    _a.sent(); // async call in parallel with above
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
function getDetails(raceName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: // required async call to retrieve details on race
                return [4 /*yield*/, dataModel.races.forEach(function (element) {
                        if (element.name == context._raceName) {
                            var obj = element;
                            for (var key in obj) {
                                if (key == "abilityScore") {
                                    details += key + " : \n";
                                    for (var subkey in obj[key]) {
                                        details += "\t\t\t" + obj[key][subkey] + "\n";
                                    }
                                    details += "\n";
                                }
                                else {
                                    details += key + " : " + obj[key] + "\n\n";
                                }
                            }
                        }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFjZS1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJhY2UtbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw4Q0FBb0U7QUFJcEUsZ0NBQWtDO0FBRWxDLDJEQUF5RDtBQUV6RCxJQUFJLE9BQVksQ0FBQztBQUNqQixJQUFJLGFBQXVCLENBQUM7QUFDNUIsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFDaEMsSUFBSSxPQUFPLEdBQVcsRUFBRSxDQUFDO0FBRXpCLGtCQUF5QixJQUFlO0lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUVsQyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRTdCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNWLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ2hELElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFFN0MsYUFBYSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7S0FDOUI7QUFDTCxDQUFDO0FBWEQsNEJBV0M7QUFFRDtJQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNwQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEIsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNqQixDQUFDO0FBSkQsZ0NBSUM7QUFFRCx3QkFBcUMsSUFBSTs7Ozs7O29CQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbEUsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ3ZCLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUUvQixJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7b0JBRWhDLHFCQUFNLFNBQVMsQ0FBQyxjQUFjLEVBQUUsRUFBQTs7b0JBQWhDLFNBQWdDLENBQUMsQ0FBVyx5Q0FBeUM7b0JBQ3JGLHFCQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUE7O29CQUFuQyxTQUFtQyxDQUFDLENBQVEsb0NBQW9DO29CQUM1RSxNQUFNLEdBQUcsdUJBQVUsQ0FBQzt3QkFDcEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxTQUFTO3dCQUMzQixXQUFXLEVBQUUsT0FBTztxQkFDdkIsQ0FBQyxDQUFDO29CQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDOzs7OztDQUNoQztBQWhCRCx3Q0FnQkM7QUFFRCxvQkFBMkIsSUFBSTtJQUMzQixhQUFhLEVBQUUsQ0FBQztBQUNwQixDQUFDO0FBRkQsZ0NBRUM7QUFBQSxDQUFDO0FBRUYsb0JBQTBCLFFBQWdCOzs7O3dCQUFNLGtEQUFrRDtnQkFDOUYscUJBQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO3dCQUNqQyxJQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBQzs0QkFDakMsSUFBSSxHQUFHLEdBQUcsT0FBaUIsQ0FBQzs0QkFDNUIsS0FBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUM7Z0NBQ2YsSUFBRyxHQUFHLElBQUksY0FBYyxFQUFDO29DQUNyQixPQUFPLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQztvQ0FDekIsS0FBSSxJQUFJLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUM7d0NBQ3ZCLE9BQU8sSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztxQ0FDakQ7b0NBQ0QsT0FBTyxJQUFJLElBQUksQ0FBQztpQ0FDbkI7cUNBQ0c7b0NBQ0EsT0FBTyxJQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztpQ0FDOUM7NkJBQ0o7eUJBQ0o7b0JBQ0wsQ0FBQyxDQUFDLEVBQUE7O29CQWhCRixTQWdCRSxDQUFDOzs7OztDQUNOIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZSwgU2hvd25Nb2RhbGx5RGF0YX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd1aS9sYWJlbCc7XG5pbXBvcnQgKiBhcyB2aWV3IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd1aS9mcmFtZSc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IHsgRGF0YU1vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvZGF0YS1tb2RlbCc7XG5cbnZhciBjb250ZXh0OiBhbnk7XG52YXIgY2xvc2VDYWxsYmFjazogRnVuY3Rpb247XG5sZXQgZGF0YU1vZGVsID0gbmV3IERhdGFNb2RlbCgpO1xubGV0IGRldGFpbHM6IHN0cmluZyA9IFwiXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJhY2VNb2RhbC5vbkxvYWRlZFwiKTtcblxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG5cbiAgICBpZiAocGFnZS5pb3MpIHtcbiAgICAgICAgbGV0IGNvbnRyb2xsZXIgPSBmcmFtZS50b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXI7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uQmFyID0gY29udHJvbGxlci5uYXZpZ2F0aW9uQmFyO1xuXG4gICAgICAgIG5hdmlnYXRpb25CYXIuYmFyU3R5bGUgPSAxO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uVW5sb2FkZWQoKSB7XG4gICAgY29uc29sZS5sb2coXCJSYWNlTW9kYWwub25VbmxvYWRlZFwiKTtcbiAgICBkYXRhTW9kZWwucmVzZXQoKTtcbiAgICBkZXRhaWxzID0gXCJcIjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9uU2hvd25Nb2RhbGx5KGFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIlJhY2VNb2RhbC5vblNob3duTW9kYWxseSwgY29udGV4dDogXCIgKyBhcmdzLmNvbnRleHQpO1xuICAgIGNvbnRleHQgPSBhcmdzLmNvbnRleHQ7XG4gICAgY2xvc2VDYWxsYmFjayA9IGFyZ3MuY2xvc2VDYWxsYmFjaztcblxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGRhdGFNb2RlbDtcblxuICAgIGF3YWl0IGRhdGFNb2RlbC5mZXRjaFJhY2VzRGF0YSgpOyAgICAgICAgICAgLy8gSFRUUCBjYWxsIHRvIGZldGNoIHJhY2UgZGF0YSBmcm9tIEpTT05cbiAgICBhd2FpdCBnZXREZXRhaWxzKGNvbnRleHQuX3JhY2VOYW1lKTsgICAgICAgIC8vIGFzeW5jIGNhbGwgaW4gcGFyYWxsZWwgd2l0aCBhYm92ZVxuICAgIGxldCBzb3VyY2UgPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgcmFjZU5hbWU6IGNvbnRleHQuX3JhY2VOYW1lLFxuICAgICAgICByYWNlRGV0YWlsczogZGV0YWlsc1xuICAgIH0pO1xuXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHNvdXJjZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWwoYXJncykgeyAgICAgICAgICAgICAgLy8gY2FsbGJhY2sgdG8gY2xvc2UgbW9kYWxcbiAgICBjbG9zZUNhbGxiYWNrKCk7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBnZXREZXRhaWxzKHJhY2VOYW1lOiBzdHJpbmcpIHsgICAvLyByZXF1aXJlZCBhc3luYyBjYWxsIHRvIHJldHJpZXZlIGRldGFpbHMgb24gcmFjZVxuICAgIGF3YWl0IGRhdGFNb2RlbC5yYWNlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZihlbGVtZW50Lm5hbWUgPT0gY29udGV4dC5fcmFjZU5hbWUpe1xuICAgICAgICAgICAgbGV0IG9iaiA9IGVsZW1lbnQgYXMgT2JqZWN0O1xuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgICAgICBpZihrZXkgPT0gXCJhYmlsaXR5U2NvcmVcIil7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHMgKz0ga2V5ICsgXCIgOiBcXG5cIjtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBzdWJrZXkgaW4gb2JqW2tleV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlscyArPSBcIlxcdFxcdFxcdFwiICsgb2JqW2tleV1bc3Via2V5XSArIFwiXFxuXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscyArPSBcIlxcblwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzICs9IGtleSArIFwiIDogXCIgKyBvYmpba2V5XSArIFwiXFxuXFxuXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iXX0=