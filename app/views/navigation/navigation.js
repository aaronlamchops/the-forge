"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("ui/frame");
var navigate_back = function (args) {
    frame_1.topmost().goBack();
};
exports.navigate_back = navigate_back;
var navigate_race_create = function (args) {
    var navigateEntry = {
        moduleName: 'views/create/race-create/race-create'
    };
    frame_1.topmost().navigate(navigateEntry);
};
exports.navigate_race_create = navigate_race_create;
var navigate_class_create = function (context) {
    var navigateEntry = {
        moduleName: 'views/create/class-create/class-create',
        context: context
    };
    frame_1.topmost().navigate(navigateEntry);
};
exports.navigate_class_create = navigate_class_create;
var navigate_ability_create = function (context) {
    var navigateEntry = {
        moduleName: 'views/create/ability-create/ability-create',
        context: context
    };
    frame_1.topmost().navigate(navigateEntry);
};
exports.navigate_ability_create = navigate_ability_create;
var navigate_library = function (args) {
    var navigateEntry = {
        moduleName: 'views/library/library'
    };
    frame_1.topmost().navigate(navigateEntry);
};
exports.navigate_library = navigate_library;
var navigate_about = function (args) {
    var navigateEntry = {
        moduleName: 'views/about/about'
    };
    frame_1.topmost().navigate(navigateEntry);
};
exports.navigate_about = navigate_about;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxrQ0FBbUM7QUFJbkMsSUFBSSxhQUFhLEdBQUcsVUFBQyxJQUFlO0lBQ2hDLGVBQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQTtBQXVDUSxzQ0FBYTtBQXJDdEIsSUFBSSxvQkFBb0IsR0FBRyxVQUFDLElBQWU7SUFDdkMsSUFBSSxhQUFhLEdBQUc7UUFDaEIsVUFBVSxFQUFFLHNDQUFzQztLQUNyRCxDQUFBO0lBQ0QsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQTtBQWdDdUIsb0RBQW9CO0FBOUI1QyxJQUFJLHFCQUFxQixHQUFHLFVBQUMsT0FBTztJQUNoQyxJQUFJLGFBQWEsR0FBRztRQUNoQixVQUFVLEVBQUUsd0NBQXdDO1FBQ3BELE9BQU8sRUFBRSxPQUFPO0tBQ25CLENBQUE7SUFDRCxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFBO0FBd0I2QyxzREFBcUI7QUF0Qm5FLElBQUksdUJBQXVCLEdBQUcsVUFBQyxPQUFPO0lBQ2xDLElBQUksYUFBYSxHQUFHO1FBQ2hCLFVBQVUsRUFBRSw0Q0FBNEM7UUFDeEQsT0FBTyxFQUFFLE9BQU87S0FDbkIsQ0FBQTtJQUNELGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUE7QUFnQm9FLDBEQUF1QjtBQWQ1RixJQUFJLGdCQUFnQixHQUFHLFVBQUMsSUFBZTtJQUNuQyxJQUFJLGFBQWEsR0FBRztRQUNoQixVQUFVLEVBQUUsdUJBQXVCO0tBQ3RDLENBQUE7SUFDRCxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFBO0FBUzZGLDRDQUFnQjtBQVA5RyxJQUFJLGNBQWMsR0FBRyxVQUFDLElBQWU7SUFDakMsSUFBSSxhQUFhLEdBQUc7UUFDaEIsVUFBVSxFQUFFLG1CQUFtQjtLQUNsQyxDQUFBO0lBQ0QsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQTtBQUUrRyx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSAndWkvZnJhbWUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuXG5cbmxldCBuYXZpZ2F0ZV9iYWNrID0gKGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIHRvcG1vc3QoKS5nb0JhY2soKTtcbn1cblxubGV0IG5hdmlnYXRlX3JhY2VfY3JlYXRlID0gKGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIGxldCBuYXZpZ2F0ZUVudHJ5ID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiAndmlld3MvY3JlYXRlL3JhY2UtY3JlYXRlL3JhY2UtY3JlYXRlJ1xuICAgIH1cbiAgICB0b3Btb3N0KCkubmF2aWdhdGUobmF2aWdhdGVFbnRyeSk7XG59XG5cbmxldCBuYXZpZ2F0ZV9jbGFzc19jcmVhdGUgPSAoY29udGV4dCk6dm9pZCA9PiB7XG4gICAgbGV0IG5hdmlnYXRlRW50cnkgPSB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd2aWV3cy9jcmVhdGUvY2xhc3MtY3JlYXRlL2NsYXNzLWNyZWF0ZScsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICB9XG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKG5hdmlnYXRlRW50cnkpO1xufVxuXG5sZXQgbmF2aWdhdGVfYWJpbGl0eV9jcmVhdGUgPSAoY29udGV4dCk6dm9pZCA9PiB7XG4gICAgbGV0IG5hdmlnYXRlRW50cnkgPSB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd2aWV3cy9jcmVhdGUvYWJpbGl0eS1jcmVhdGUvYWJpbGl0eS1jcmVhdGUnLFxuICAgICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgfVxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0ZUVudHJ5KTtcbn1cblxubGV0IG5hdmlnYXRlX2xpYnJhcnkgPSAoYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgbGV0IG5hdmlnYXRlRW50cnkgPSB7XG4gICAgICAgIG1vZHVsZU5hbWU6ICd2aWV3cy9saWJyYXJ5L2xpYnJhcnknXG4gICAgfVxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0ZUVudHJ5KTtcbn1cblxubGV0IG5hdmlnYXRlX2Fib3V0ID0gKGFyZ3M6IEV2ZW50RGF0YSkgPT4ge1xuICAgIGxldCBuYXZpZ2F0ZUVudHJ5ID0ge1xuICAgICAgICBtb2R1bGVOYW1lOiAndmlld3MvYWJvdXQvYWJvdXQnXG4gICAgfVxuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0ZUVudHJ5KTtcbn1cblxuZXhwb3J0IHsgbmF2aWdhdGVfYmFjaywgbmF2aWdhdGVfcmFjZV9jcmVhdGUsIG5hdmlnYXRlX2NsYXNzX2NyZWF0ZSwgbmF2aWdhdGVfYWJpbGl0eV9jcmVhdGUsIG5hdmlnYXRlX2xpYnJhcnksIG5hdmlnYXRlX2Fib3V0IH1cblxuIl19