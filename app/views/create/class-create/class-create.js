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
                        nav_next: navigation.navigate_ability_create,
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
    // pass the class chosen as context to next screen
    var classAndRace = {
        class: _classViewModel.getByClassName(label.text),
        race: page.navigationContext
    };
    navigation.navigate_ability_create(classAndRace);
}
exports.selectClass = selectClass;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3MtY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQW9FO0FBTXBFLG1DQUFxQztBQUdyQyxrREFBb0Q7QUFDcEQsd0RBQTBEO0FBQzFELHNFQUFxRTtBQUNyRSxJQUFNLFVBQVUsR0FBRywrQkFBK0IsQ0FBQztBQUVuRCxJQUFJLGVBQWUsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUczQyxvQkFBMEIsSUFBZTs7Ozs7O29CQUVqQyxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUM7b0JBRXRDLHFCQUFNLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOztvQkFBeEMsU0FBd0MsQ0FBQztvQkFDekMsZUFBZSxFQUFFLENBQUM7b0JBRWQsTUFBTSxHQUFHLHVCQUFVLENBQUM7d0JBQ3BCLFFBQVEsRUFBRSxVQUFVLENBQUMsdUJBQXVCO3dCQUM1QyxRQUFRLEVBQUUsVUFBVSxDQUFDLGFBQWE7d0JBQ2xDLFVBQVUsRUFBRSxlQUFlLENBQUMsWUFBWSxFQUFFO3FCQUM3QyxDQUFDLENBQUM7b0JBRUgsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7Ozs7O0NBQ2hDO0FBNkNRLGdDQUFVO0FBM0NuQixxQkFBcUIsSUFBSTtJQUNyQixJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUN4QyxJQUFJLE1BQU0sR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BDLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRW5ELGtEQUFrRDtJQUNsRCxJQUFNLFlBQVksR0FBRztRQUNqQixLQUFLLEVBQUUsZUFBZSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ2pELElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCO0tBQy9CLENBQUE7SUFDRCxVQUFVLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDckQsQ0FBQztBQTRCK0Msa0NBQVc7QUExQjNELHFCQUFxQixJQUFJO0lBQ3JCLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQUksTUFBTSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFcEMsSUFBSSxPQUFPLEdBQUc7UUFDVixVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUU7S0FDeEIsQ0FBQztJQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRTtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNiLENBQUM7QUFla0Msa0NBQVc7QUFiOUM7SUFDSSxJQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNwQyxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNqRDtTQUNHO1FBQ0EsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDakQ7QUFDTCxDQUFDO0FBRUQ7OztZQUNJLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7OztDQUMzQjtBQUVvQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgUGFnZSwgQ29sb3IgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICd1aS9sYWJlbCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICd1aS9idXR0b24nO1xuaW1wb3J0IHsgTGlzdFZpZXcsIEl0ZW1FdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcbmltcG9ydCAqIGFzIHZpZXcgZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3VpL2ZyYW1lJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tICdhcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uIGZyb20gJy4uLy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBDbGFzc1ZpZXdNb2RlbCB9IGZyb20gJy4uLy4uLy4uL3ZpZXctbW9kZWxzL2NsYXNzVmlld01vZGVsJztcbmNvbnN0IENsYXNzTW9kYWwgPSAndmlld3MvY2xhc3MtbW9kYWwvY2xhc3MtbW9kYWwnO1xuXG5sZXQgX2NsYXNzVmlld01vZGVsID0gbmV3IENsYXNzVmlld01vZGVsKCk7XG5cblxuYXN5bmMgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcblxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IF9jbGFzc1ZpZXdNb2RlbDtcblxuICAgIGF3YWl0IF9jbGFzc1ZpZXdNb2RlbC5yZXNvbHZlQ2xhc3NEYXRhKCk7XG4gICAgaW5pdENsYXNzQ2hvc2VuKCk7XG5cbiAgICBsZXQgc291cmNlID0gZnJvbU9iamVjdCh7XG4gICAgICAgIG5hdl9uZXh0OiBuYXZpZ2F0aW9uLm5hdmlnYXRlX2FiaWxpdHlfY3JlYXRlLFxuICAgICAgICBuYXZfYmFjazogbmF2aWdhdGlvbi5uYXZpZ2F0ZV9iYWNrLFxuICAgICAgICBjbGFzc19saXN0OiBfY2xhc3NWaWV3TW9kZWwuZ2V0Q2xhc3NEYXRhKClcbiAgICB9KTtcbiAgICBcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gc291cmNlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RDbGFzcyhhcmdzKTogdm9pZCB7XG4gICAgbGV0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xuICAgIGxldCBzZW5kZXIgPSA8dmlldy5WaWV3PmFyZ3Mub2JqZWN0O1xuICAgIGxldCBsYWJlbCA9IDxMYWJlbD52aWV3LmdldFZpZXdCeUlkKHNlbmRlci5wYXJlbnQsIHNlbmRlci5pZCk7XG5cbiAgICBjb25zb2xlLmxvZyhhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ19jbGFzc0Nob3NlbicpKTtcbiAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ19jbGFzc0Nob3NlbicsIGxhYmVsLnRleHQpO1xuICAgIGNvbnNvbGUubG9nKGFwcFNldHRpbmdzLmdldFN0cmluZygnX2NsYXNzQ2hvc2VuJykpO1xuXG4gICAgLy8gcGFzcyB0aGUgY2xhc3MgY2hvc2VuIGFzIGNvbnRleHQgdG8gbmV4dCBzY3JlZW5cbiAgICBjb25zdCBjbGFzc0FuZFJhY2UgPSB7XG4gICAgICAgIGNsYXNzOiBfY2xhc3NWaWV3TW9kZWwuZ2V0QnlDbGFzc05hbWUobGFiZWwudGV4dCksXG4gICAgICAgIHJhY2U6IHBhZ2UubmF2aWdhdGlvbkNvbnRleHRcbiAgICB9XG4gICAgbmF2aWdhdGlvbi5uYXZpZ2F0ZV9hYmlsaXR5X2NyZWF0ZShjbGFzc0FuZFJhY2UpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW5mbyhhcmdzKTogdm9pZCB7XG4gICAgbGV0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xuICAgIGxldCBzZW5kZXIgPSA8dmlldy5WaWV3PmFyZ3Mub2JqZWN0O1xuXG4gICAgbGV0IGNvbnRleHQgPSB7XG4gICAgICAgIF9jbGFzc05hbWU6IHNlbmRlci5pZFxuICAgIH07XG4gICAgXG4gICAgcGFnZS5zaG93TW9kYWwoQ2xhc3NNb2RhbCwgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsb3NlZFwiKTtcbiAgICB9LCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gaW5pdENsYXNzQ2hvc2VuKCk6IHZvaWQge1xuICAgIGlmKCFhcHBTZXR0aW5ncy5oYXNLZXkoJ19jbGFzc0Nob3NlbicpKSB7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZygnX2NsYXNzQ2hvc2VuJywgJ25vbmUnKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfY2xhc3NDaG9zZW4nLCAnbm9uZScpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGVBd2F5KCkge1xuICAgIF9jbGFzc1ZpZXdNb2RlbC5yZXNldCgpO1xufVxuXG5leHBvcnQgeyBwYWdlTG9hZGVkLCBuYXZpZ2F0ZUF3YXksIGRpc3BsYXlJbmZvLCBzZWxlY3RDbGFzcyB9O1xuIl19