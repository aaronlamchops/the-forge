"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var class_1 = require("../models/classes/class");
//Singleton
var ClassViewModel = /** @class */ (function (_super) {
    __extends(ClassViewModel, _super);
    function ClassViewModel() {
        var _this = _super.call(this) || this;
        _this.classData = new observable_array_1.ObservableArray();
        return _this;
    }
    ClassViewModel.prototype.getClassData = function () {
        return this.classData;
    };
    ClassViewModel.prototype.getByClassName = function (name) {
        var data;
        this.classData.forEach(function (element) {
            if (element.name == name) {
                data = element;
            }
        });
        return data;
    };
    ClassViewModel.prototype.fetchClassData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, clss;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('https://theforge-api.herokuapp.com/api/v1/classes')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        clss = _a.sent();
                        return [2 /*return*/, clss];
                }
            });
        });
    };
    ClassViewModel.prototype.resolveClassData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchClassData()
                            .then(function (data) {
                            data.forEach(function (element) {
                                var clss = new class_1.Class(element['id'], element['name'], element['hitDice'], element['proficiencies'], element['startingEquipment'], element['features'], element['table']);
                                _this.classData.push(clss);
                            });
                        })
                            .catch(function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClassViewModel.prototype.reset = function () {
        this.classData = new observable_array_1.ObservableArray();
    };
    return ClassViewModel;
}(observable_1.Observable));
exports.ClassViewModel = ClassViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NWaWV3TW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGFzc1ZpZXdNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUF3RDtBQUN4RCwwREFBd0Q7QUFFeEQsaURBQWdEO0FBRWhELFdBQVc7QUFDWDtJQUFvQyxrQ0FBVTtJQUkxQztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQURHLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQ0FBZSxFQUFTLENBQUM7O0lBQ2xELENBQUM7SUFFTSxxQ0FBWSxHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU0sdUNBQWMsR0FBckIsVUFBc0IsSUFBWTtRQUM5QixJQUFJLElBQUksQ0FBQztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUMxQixJQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNyQixJQUFJLEdBQUcsT0FBTyxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRVksdUNBQWMsR0FBM0I7Ozs7OzRCQUdtQixxQkFBTSxLQUFLLENBQUMsbURBQW1ELENBQUMsRUFBQTs7d0JBQTNFLFFBQVEsR0FBRyxTQUFnRTt3QkFDcEUscUJBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBNUIsSUFBSSxHQUFHLFNBQXFCO3dCQUNoQyxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDZjtJQUVZLHlDQUFnQixHQUE3Qjs7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLGNBQWMsRUFBRTs2QkFDdEIsSUFBSSxDQUFDLFVBQUEsSUFBSTs0QkFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBWTtnQ0FDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUM3RSxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0NBQ3pGLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUM5QixDQUFDLENBQUMsQ0FBQzt3QkFDUCxDQUFDLENBQUM7NkJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRzs0QkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQixDQUFDLENBQUMsRUFBQTs7d0JBVk4sU0FVTSxDQUFDOzs7OztLQUNWO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQ0FBZSxFQUFTLENBQUM7SUFDbEQsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWpERCxDQUFvQyx1QkFBVSxHQWlEN0M7QUFqRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgeyBDbGFzcyB9IGZyb20gJy4uL21vZGVscy9jbGFzc2VzL2NsYXNzJztcblxuLy9TaW5nbGV0b25cbmV4cG9ydCBjbGFzcyBDbGFzc1ZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHVibGljIGNsYXNzRGF0YTogT2JzZXJ2YWJsZUFycmF5PENsYXNzPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY2xhc3NEYXRhID0gbmV3IE9ic2VydmFibGVBcnJheTxDbGFzcz4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2xhc3NEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc0RhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJ5Q2xhc3NOYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgdGhpcy5jbGFzc0RhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZmV0Y2hDbGFzc0RhdGEoKSB7XG4gICAgICAgIC8vIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5teWpzb24uY29tL2JpbnMvNjM5N2InKTsgPC0tIERFUFJJQ0FURURcbiAgICAgICAgLy8gbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm15anNvbi5jb20vYmlucy9zNnJlYicpOyA8LS0gREVQUklDQVRFRFxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly90aGVmb3JnZS1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvY2xhc3NlcycpO1xuICAgICAgICBsZXQgY2xzcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGNsc3M7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHJlc29sdmVDbGFzc0RhdGEoKXtcbiAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENsYXNzRGF0YSgpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2xzcyA9IG5ldyBDbGFzcyhlbGVtZW50WydpZCddLCBlbGVtZW50WyduYW1lJ10sIGVsZW1lbnRbJ2hpdERpY2UnXSwgZWxlbWVudFsncHJvZmljaWVuY2llcyddLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50WydzdGFydGluZ0VxdWlwbWVudCddLCBlbGVtZW50WydmZWF0dXJlcyddLCBlbGVtZW50Wyd0YWJsZSddKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0RhdGEucHVzaChjbHNzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmNsYXNzRGF0YSA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Q2xhc3M+KCk7XG4gICAgfVxufSJdfQ==