"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var class_1 = require("../models/classes/class");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NWaWV3TW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGFzc1ZpZXdNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUF3RDtBQUN4RCwwREFBd0Q7QUFFeEQsaURBQWdEO0FBRWhEO0lBQW9DLGtDQUFVO0lBSTFDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBREcsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtDQUFlLEVBQVMsQ0FBQzs7SUFDbEQsQ0FBQztJQUVNLHFDQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFWSx1Q0FBYyxHQUEzQjs7Ozs7NEJBR21CLHFCQUFNLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxFQUFBOzt3QkFBM0UsUUFBUSxHQUFHLFNBQWdFO3dCQUNwRSxxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUE1QixJQUFJLEdBQUcsU0FBcUI7d0JBQ2hDLHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBRVkseUNBQWdCLEdBQTdCOzs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsY0FBYyxFQUFFOzZCQUN0QixJQUFJLENBQUMsVUFBQSxJQUFJOzRCQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFZO2dDQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQzdFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQ0FDekYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQzlCLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQzs2QkFDRCxLQUFLLENBQUMsVUFBQSxHQUFHOzRCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JCLENBQUMsQ0FBQyxFQUFBOzt3QkFWTixTQVVNLENBQUM7Ozs7O0tBQ1Y7SUFFTSw4QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtDQUFlLEVBQVMsQ0FBQztJQUNsRCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBdkNELENBQW9DLHVCQUFVLEdBdUM3QztBQXZDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0ICogYXMgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCB7IENsYXNzIH0gZnJvbSAnLi4vbW9kZWxzL2NsYXNzZXMvY2xhc3MnO1xuXG5leHBvcnQgY2xhc3MgQ2xhc3NWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIHB1YmxpYyBjbGFzc0RhdGE6IE9ic2VydmFibGVBcnJheTxDbGFzcz47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNsYXNzRGF0YSA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Q2xhc3M+KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENsYXNzRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBmZXRjaENsYXNzRGF0YSgpIHtcbiAgICAgICAgLy8gbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm15anNvbi5jb20vYmlucy82Mzk3YicpOyA8LS0gREVQUklDQVRFRFxuICAgICAgICAvLyBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkubXlqc29uLmNvbS9iaW5zL3M2cmViJyk7IDwtLSBERVBSSUNBVEVEXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3RoZWZvcmdlLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9jbGFzc2VzJyk7XG4gICAgICAgIGxldCBjbHNzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gY2xzcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcmVzb2x2ZUNsYXNzRGF0YSgpe1xuICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ2xhc3NEYXRhKClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbHNzID0gbmV3IENsYXNzKGVsZW1lbnRbJ2lkJ10sIGVsZW1lbnRbJ25hbWUnXSwgZWxlbWVudFsnaGl0RGljZSddLCBlbGVtZW50Wydwcm9maWNpZW5jaWVzJ10sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbJ3N0YXJ0aW5nRXF1aXBtZW50J10sIGVsZW1lbnRbJ2ZlYXR1cmVzJ10sIGVsZW1lbnRbJ3RhYmxlJ10pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzRGF0YS5wdXNoKGNsc3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NEYXRhID0gbmV3IE9ic2VydmFibGVBcnJheTxDbGFzcz4oKTtcbiAgICB9XG59Il19