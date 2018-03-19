"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var view = require("ui/core/view");
var frame = require("ui/frame");
var navigation = require("../navigation/navigation");
var data_model_1 = require("../../view-models/data-model");
var RaceModal = 'views/race-modal/race-modal';
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
function displayInfo(args) {
    var page = args.object.page;
    var sender = args.object;
    var label = view.getViewById(sender.parent, 'race-label');
    var context = {
        _raceName: label.text
    };
    page.showModal(RaceModal, context, function () {
        console.log("closed");
    }, true);
}
exports.displayInfo = displayInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFvRTtBQUlwRSxtQ0FBcUM7QUFDckMsZ0NBQWtDO0FBR2xDLHFEQUF1RDtBQUN2RCwyREFBeUQ7QUFFekQsSUFBTSxTQUFTLEdBQUcsNkJBQTZCLENBQUM7QUFDaEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFJaEMsb0JBQTBCLElBQWU7Ozs7OztvQkFFakMsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO29CQUVoQyxxQkFBTSxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUE7O29CQUFoQyxTQUFnQyxDQUFDO29CQUU3QixNQUFNLEdBQUcsdUJBQVUsQ0FBQzt3QkFDcEIsUUFBUSxFQUFFLFVBQVUsQ0FBQyxhQUFhO3dCQUNsQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRTtxQkFDbEMsQ0FBQyxDQUFDO29CQUVILElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTt3QkFDTixVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7d0JBQzVDLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO3dCQUU3QyxhQUFhLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztxQkFDOUI7b0JBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7Ozs7O0NBQ2hDO0FBcUJRLGdDQUFVO0FBbkJuQjs7O1lBQ0ksU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7O0NBQ3JCO0FBaUJvQixvQ0FBWTtBQWZqQyxxQkFBcUIsSUFBSTtJQUNyQixJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUN4QyxJQUFJLE1BQU0sR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BDLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUVqRSxJQUFJLE9BQU8sR0FBRztRQUNWLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSTtLQUN4QixDQUFDO0lBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUdrQyxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3VpL2xhYmVsJztcbmltcG9ydCAqIGFzIHZpZXcgZnJvbSAndWkvY29yZS92aWV3JztcbmltcG9ydCAqIGFzIGZyYW1lIGZyb20gJ3VpL2ZyYW1lJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5cbmltcG9ydCAqIGFzIG5hdmlnYXRpb24gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IERhdGFNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL2RhdGEtbW9kZWwnO1xuXG5jb25zdCBSYWNlTW9kYWwgPSAndmlld3MvcmFjZS1tb2RhbC9yYWNlLW1vZGFsJztcbmxldCBkYXRhTW9kZWwgPSBuZXcgRGF0YU1vZGVsKCk7XG5cblxuXG5hc3luYyBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gZGF0YU1vZGVsO1xuXG4gICAgYXdhaXQgZGF0YU1vZGVsLmZldGNoUmFjZXNEYXRhKCk7XG5cbiAgICBsZXQgc291cmNlID0gZnJvbU9iamVjdCh7XG4gICAgICAgIG5hdl9iYWNrOiBuYXZpZ2F0aW9uLm5hdmlnYXRlX2JhY2ssXG4gICAgICAgIHJhY2VfbGlzdDogZGF0YU1vZGVsLmdldFJhY2VzKClcbiAgICB9KTtcblxuICAgIGlmIChwYWdlLmlvcykge1xuICAgICAgICBsZXQgY29udHJvbGxlciA9IGZyYW1lLnRvcG1vc3QoKS5pb3MuY29udHJvbGxlcjtcbiAgICAgICAgbGV0IG5hdmlnYXRpb25CYXIgPSBjb250cm9sbGVyLm5hdmlnYXRpb25CYXI7XG5cbiAgICAgICAgbmF2aWdhdGlvbkJhci5iYXJTdHlsZSA9IDE7XG4gICAgfVxuICAgIFxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBzb3VyY2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG5hdmlnYXRlQXdheSgpIHtcbiAgICBkYXRhTW9kZWwucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUluZm8oYXJncyk6IHZvaWQge1xuICAgIGxldCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBsZXQgc2VuZGVyID0gPHZpZXcuVmlldz5hcmdzLm9iamVjdDtcbiAgICBsZXQgbGFiZWwgPSA8TGFiZWw+dmlldy5nZXRWaWV3QnlJZChzZW5kZXIucGFyZW50LCAncmFjZS1sYWJlbCcpO1xuXG4gICAgbGV0IGNvbnRleHQgPSB7XG4gICAgICAgIF9yYWNlTmFtZTogbGFiZWwudGV4dFxuICAgIH07XG4gICAgXG4gICAgcGFnZS5zaG93TW9kYWwoUmFjZU1vZGFsLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VkXCIpO1xuICAgIH0sIHRydWUpO1xufVxuXG5cbmV4cG9ydCB7IHBhZ2VMb2FkZWQsIG5hdmlnYXRlQXdheSwgZGlzcGxheUluZm8gfTsiXX0=