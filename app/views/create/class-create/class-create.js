"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var view = require("ui/core/view");
var appSettings = require("application-settings");
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
                    initClassChosen();
                    source = observable_1.fromObject({
                        nav_next: navigation.navigate_back,
                        nav_back: navigation.navigate_back,
                        class_list: _classViewModel.getClassData()
                    });
                    page.bindingContext = source;
                    return [2 /*return*/];
            }
        });
    });
}
exports.pageLoaded = pageLoaded;
function selectClass(args) {
    var page = args.object.page;
    var sender = args.object;
    var label = view.getViewById(sender.parent, sender.id);
    console.log(appSettings.getString('_classChosen'));
    appSettings.setString('_classChosen', label.text);
    console.log(appSettings.getString('_classChosen'));
}
exports.selectClass = selectClass;
function initClassChosen() {
    if (!appSettings.hasKey('_classChosen')) {
        appSettings.setString('_classChosen', 'none');
    }
    else {
        appSettings.setString('_classChosen', 'none');
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3MtY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQW9FO0FBTXBFLG1DQUFxQztBQUdyQyxrREFBb0Q7QUFDcEQsd0RBQTBEO0FBQzFELHNFQUFxRTtBQUNyRSxJQUFNLFVBQVUsR0FBRywrQkFBK0IsQ0FBQztBQUVuRCxJQUFJLGVBQWUsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUczQyxvQkFBMEIsSUFBZTs7Ozs7O29CQUVqQyxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUM7b0JBRXRDLHFCQUFNLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOztvQkFBeEMsU0FBd0MsQ0FBQztvQkFDekMsZUFBZSxFQUFFLENBQUM7b0JBRWQsTUFBTSxHQUFHLHVCQUFVLENBQUM7d0JBQ3BCLFFBQVEsRUFBRSxVQUFVLENBQUMsYUFBYTt3QkFDbEMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxhQUFhO3dCQUNsQyxVQUFVLEVBQUUsZUFBZSxDQUFDLFlBQVksRUFBRTtxQkFDN0MsQ0FBQyxDQUFDO29CQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDOzs7OztDQUNoQztBQXNDUSxnQ0FBVTtBQXBDbkIscUJBQXFCLElBQUk7SUFDckIsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDeEMsSUFBSSxNQUFNLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQyxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTlELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ25ELFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBNEIrQyxrQ0FBVztBQTFCM0Q7SUFDSSxJQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNwQyxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNqRDtTQUNHO1FBQ0EsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDakQ7QUFDTCxDQUFDO0FBRUQ7OztZQUNJLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7OztDQUMzQjtBQWVvQixvQ0FBWTtBQWJqQyxxQkFBcUIsSUFBSTtJQUNyQixJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUN4QyxJQUFJLE1BQU0sR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRXBDLElBQUksT0FBTyxHQUFHO1FBQ1YsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFO0tBQ3hCLENBQUM7SUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUU7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDYixDQUFDO0FBRWtDLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBQYWdlLCBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3VpL2xhYmVsJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3VpL2J1dHRvbic7XG5pbXBvcnQgeyBMaXN0VmlldywgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlld1wiO1xuaW1wb3J0ICogYXMgdmlldyBmcm9tICd1aS9jb3JlL3ZpZXcnO1xuaW1wb3J0ICogYXMgZnJhbWUgZnJvbSAndWkvZnJhbWUnO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcbmltcG9ydCAqIGFzIG5hdmlnYXRpb24gZnJvbSAnLi4vLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IENsYXNzVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vLi4vdmlldy1tb2RlbHMvY2xhc3NWaWV3TW9kZWwnO1xuY29uc3QgQ2xhc3NNb2RhbCA9ICd2aWV3cy9jbGFzcy1tb2RhbC9jbGFzcy1tb2RhbCc7XG5cbmxldCBfY2xhc3NWaWV3TW9kZWwgPSBuZXcgQ2xhc3NWaWV3TW9kZWwoKTtcblxuXG5hc3luYyBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gX2NsYXNzVmlld01vZGVsO1xuXG4gICAgYXdhaXQgX2NsYXNzVmlld01vZGVsLnJlc29sdmVDbGFzc0RhdGEoKTtcbiAgICBpbml0Q2xhc3NDaG9zZW4oKTtcblxuICAgIGxldCBzb3VyY2UgPSBmcm9tT2JqZWN0KHtcbiAgICAgICAgbmF2X25leHQ6IG5hdmlnYXRpb24ubmF2aWdhdGVfYmFjayxcbiAgICAgICAgbmF2X2JhY2s6IG5hdmlnYXRpb24ubmF2aWdhdGVfYmFjayxcbiAgICAgICAgY2xhc3NfbGlzdDogX2NsYXNzVmlld01vZGVsLmdldENsYXNzRGF0YSgpXG4gICAgfSk7XG4gICAgXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHNvdXJjZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0Q2xhc3MoYXJncyk6IHZvaWQge1xuICAgIGxldCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBsZXQgc2VuZGVyID0gPHZpZXcuVmlldz5hcmdzLm9iamVjdDtcbiAgICBsZXQgbGFiZWwgPSA8TGFiZWw+dmlldy5nZXRWaWV3QnlJZChzZW5kZXIucGFyZW50LCBzZW5kZXIuaWQpO1xuXG4gICAgY29uc29sZS5sb2coYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdfY2xhc3NDaG9zZW4nKSk7XG4gICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfY2xhc3NDaG9zZW4nLCBsYWJlbC50ZXh0KTtcbiAgICBjb25zb2xlLmxvZyhhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ19jbGFzc0Nob3NlbicpKTtcbn1cblxuZnVuY3Rpb24gaW5pdENsYXNzQ2hvc2VuKCk6IHZvaWQge1xuICAgIGlmKCFhcHBTZXR0aW5ncy5oYXNLZXkoJ19jbGFzc0Nob3NlbicpKSB7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZygnX2NsYXNzQ2hvc2VuJywgJ25vbmUnKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfY2xhc3NDaG9zZW4nLCAnbm9uZScpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGVBd2F5KCkge1xuICAgIF9jbGFzc1ZpZXdNb2RlbC5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW5mbyhhcmdzKTogdm9pZCB7XG4gICAgbGV0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xuICAgIGxldCBzZW5kZXIgPSA8dmlldy5WaWV3PmFyZ3Mub2JqZWN0O1xuXG4gICAgbGV0IGNvbnRleHQgPSB7XG4gICAgICAgIF9jbGFzc05hbWU6IHNlbmRlci5pZFxuICAgIH07XG4gICAgXG4gICAgcGFnZS5zaG93TW9kYWwoQ2xhc3NNb2RhbCwgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsb3NlZFwiKTtcbiAgICB9LCB0cnVlKTtcbn1cblxuZXhwb3J0IHsgcGFnZUxvYWRlZCwgbmF2aWdhdGVBd2F5LCBkaXNwbGF5SW5mbywgc2VsZWN0Q2xhc3MgfTtcbiJdfQ==