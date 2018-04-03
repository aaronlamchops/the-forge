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
                    case 0: return [4 /*yield*/, fetch('https://api.myjson.com/bins/6397b')];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NWaWV3TW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGFzc1ZpZXdNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUF3RDtBQUN4RCwwREFBd0Q7QUFFeEQsaURBQWdEO0FBRWhEO0lBQW9DLGtDQUFVO0lBSTFDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBREcsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtDQUFlLEVBQVMsQ0FBQzs7SUFDbEQsQ0FBQztJQUVNLHFDQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFWSx1Q0FBYyxHQUEzQjs7Ozs7NEJBQ21CLHFCQUFNLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFBOzt3QkFBM0QsUUFBUSxHQUFHLFNBQWdEO3dCQUNwRCxxQkFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUE1QixJQUFJLEdBQUcsU0FBcUI7d0JBQ2hDLHNCQUFPLElBQUksRUFBQzs7OztLQUNmO0lBRVkseUNBQWdCLEdBQTdCOzs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsY0FBYyxFQUFFOzZCQUN0QixJQUFJLENBQUMsVUFBQSxJQUFJOzRCQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFZO2dDQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dDQUN4SyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDOUIsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDOzZCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7NEJBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckIsQ0FBQyxDQUFDLEVBQUE7O3dCQVROLFNBU00sQ0FBQzs7Ozs7S0FDVjtJQUVNLDhCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0NBQWUsRUFBUyxDQUFDO0lBQ2xELENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFwQ0QsQ0FBb0MsdUJBQVUsR0FvQzdDO0FBcENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IHsgQ2xhc3MgfSBmcm9tICcuLi9tb2RlbHMvY2xhc3Nlcy9jbGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBDbGFzc1ZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHVibGljIGNsYXNzRGF0YTogT2JzZXJ2YWJsZUFycmF5PENsYXNzPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuY2xhc3NEYXRhID0gbmV3IE9ic2VydmFibGVBcnJheTxDbGFzcz4oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2xhc3NEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc0RhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGZldGNoQ2xhc3NEYXRhKCkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkubXlqc29uLmNvbS9iaW5zLzYzOTdiJyk7XG4gICAgICAgIGxldCBjbHNzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gY2xzcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcmVzb2x2ZUNsYXNzRGF0YSgpe1xuICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ2xhc3NEYXRhKClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjbHNzID0gbmV3IENsYXNzKGVsZW1lbnRbJ2lkJ10sIGVsZW1lbnRbJ25hbWUnXSwgZWxlbWVudFsnaGl0RGljZSddLCBlbGVtZW50Wydwcm9maWNpZW5jaWVzJ10sIGVsZW1lbnRbJ3N0YXJ0aW5nRXF1aXBtZW50J10sIGVsZW1lbnRbJ2ZlYXR1cmVzJ10sIGVsZW1lbnRbJ3RhYmxlJ10pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzRGF0YS5wdXNoKGNsc3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NEYXRhID0gbmV3IE9ic2VydmFibGVBcnJheTxDbGFzcz4oKTtcbiAgICB9XG59Il19