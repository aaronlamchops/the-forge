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
    navigation.navigate_ability_create();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xhc3MtY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQW9FO0FBTXBFLG1DQUFxQztBQUdyQyxrREFBb0Q7QUFDcEQsd0RBQTBEO0FBQzFELHNFQUFxRTtBQUNyRSxJQUFNLFVBQVUsR0FBRywrQkFBK0IsQ0FBQztBQUVuRCxJQUFJLGVBQWUsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUczQyxvQkFBMEIsSUFBZTs7Ozs7O29CQUVqQyxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUM7b0JBRXRDLHFCQUFNLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOztvQkFBeEMsU0FBd0MsQ0FBQztvQkFDekMsZUFBZSxFQUFFLENBQUM7b0JBRWQsTUFBTSxHQUFHLHVCQUFVLENBQUM7d0JBQ3BCLFFBQVEsRUFBRSxVQUFVLENBQUMsdUJBQXVCO3dCQUM1QyxRQUFRLEVBQUUsVUFBVSxDQUFDLGFBQWE7d0JBQ2xDLFVBQVUsRUFBRSxlQUFlLENBQUMsWUFBWSxFQUFFO3FCQUM3QyxDQUFDLENBQUM7b0JBRUgsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7Ozs7O0NBQ2hDO0FBd0NRLGdDQUFVO0FBdENuQixxQkFBcUIsSUFBSTtJQUNyQixJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUN4QyxJQUFJLE1BQU0sR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BDLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRW5ELFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQ3pDLENBQUM7QUE0QitDLGtDQUFXO0FBMUIzRDtJQUNJLElBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ3BDLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2pEO1NBQ0c7UUFDQSxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNqRDtBQUNMLENBQUM7QUFFRDs7O1lBQ0ksZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7O0NBQzNCO0FBZW9CLG9DQUFZO0FBYmpDLHFCQUFxQixJQUFJO0lBQ3JCLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3hDLElBQUksTUFBTSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFcEMsSUFBSSxPQUFPLEdBQUc7UUFDVixVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUU7S0FDeEIsQ0FBQztJQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRTtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNiLENBQUM7QUFFa0Msa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCB7IFBhZ2UsIENvbG9yIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndWkvbGFiZWwnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndWkvYnV0dG9uJztcbmltcG9ydCB7IExpc3RWaWV3LCBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XG5pbXBvcnQgKiBhcyB2aWV3IGZyb20gJ3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tICd1aS9mcmFtZSc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSAnYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuaW1wb3J0ICogYXMgbmF2aWdhdGlvbiBmcm9tICcuLi8uLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgQ2xhc3NWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi8uLi92aWV3LW1vZGVscy9jbGFzc1ZpZXdNb2RlbCc7XG5jb25zdCBDbGFzc01vZGFsID0gJ3ZpZXdzL2NsYXNzLW1vZGFsL2NsYXNzLW1vZGFsJztcblxubGV0IF9jbGFzc1ZpZXdNb2RlbCA9IG5ldyBDbGFzc1ZpZXdNb2RlbCgpO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG5cbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBfY2xhc3NWaWV3TW9kZWw7XG5cbiAgICBhd2FpdCBfY2xhc3NWaWV3TW9kZWwucmVzb2x2ZUNsYXNzRGF0YSgpO1xuICAgIGluaXRDbGFzc0Nob3NlbigpO1xuXG4gICAgbGV0IHNvdXJjZSA9IGZyb21PYmplY3Qoe1xuICAgICAgICBuYXZfbmV4dDogbmF2aWdhdGlvbi5uYXZpZ2F0ZV9hYmlsaXR5X2NyZWF0ZSxcbiAgICAgICAgbmF2X2JhY2s6IG5hdmlnYXRpb24ubmF2aWdhdGVfYmFjayxcbiAgICAgICAgY2xhc3NfbGlzdDogX2NsYXNzVmlld01vZGVsLmdldENsYXNzRGF0YSgpXG4gICAgfSk7XG4gICAgXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHNvdXJjZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0Q2xhc3MoYXJncyk6IHZvaWQge1xuICAgIGxldCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBsZXQgc2VuZGVyID0gPHZpZXcuVmlldz5hcmdzLm9iamVjdDtcbiAgICBsZXQgbGFiZWwgPSA8TGFiZWw+dmlldy5nZXRWaWV3QnlJZChzZW5kZXIucGFyZW50LCBzZW5kZXIuaWQpO1xuXG4gICAgY29uc29sZS5sb2coYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCdfY2xhc3NDaG9zZW4nKSk7XG4gICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfY2xhc3NDaG9zZW4nLCBsYWJlbC50ZXh0KTtcbiAgICBjb25zb2xlLmxvZyhhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ19jbGFzc0Nob3NlbicpKTtcblxuICAgIG5hdmlnYXRpb24ubmF2aWdhdGVfYWJpbGl0eV9jcmVhdGUoKTtcbn1cblxuZnVuY3Rpb24gaW5pdENsYXNzQ2hvc2VuKCk6IHZvaWQge1xuICAgIGlmKCFhcHBTZXR0aW5ncy5oYXNLZXkoJ19jbGFzc0Nob3NlbicpKSB7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZygnX2NsYXNzQ2hvc2VuJywgJ25vbmUnKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdfY2xhc3NDaG9zZW4nLCAnbm9uZScpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGVBd2F5KCkge1xuICAgIF9jbGFzc1ZpZXdNb2RlbC5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5SW5mbyhhcmdzKTogdm9pZCB7XG4gICAgbGV0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xuICAgIGxldCBzZW5kZXIgPSA8dmlldy5WaWV3PmFyZ3Mub2JqZWN0O1xuXG4gICAgbGV0IGNvbnRleHQgPSB7XG4gICAgICAgIF9jbGFzc05hbWU6IHNlbmRlci5pZFxuICAgIH07XG4gICAgXG4gICAgcGFnZS5zaG93TW9kYWwoQ2xhc3NNb2RhbCwgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsb3NlZFwiKTtcbiAgICB9LCB0cnVlKTtcbn1cblxuZXhwb3J0IHsgcGFnZUxvYWRlZCwgbmF2aWdhdGVBd2F5LCBkaXNwbGF5SW5mbywgc2VsZWN0Q2xhc3MgfTtcbiJdfQ==