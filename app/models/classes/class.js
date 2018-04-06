"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Class = /** @class */ (function () {
    function Class(id, name, hitDice, proficiencies, startingEquipment, features, levelTable) {
        this.id = id;
        this.name = name;
        this.hitDice = hitDice;
        this.proficiencies = proficiencies;
        this.startingEquipment = startingEquipment;
        this.features = features;
        this.levelTable = levelTable;
    }
    Class.prototype.toString = function () {
        var details = "";
        details += "Id: \t\t" + this.id + "\n" +
            ("Name: \t" + this.name + "\n") +
            ("Hit Dice: \t" + this.hitDice + "\n\n") +
            ("Proficiencies: \t\n\n" + this.convertProficiencies() + "\n") +
            ("Features: \n\n" + this.convertFeatures());
        // this.startingEquipment.toString() +
        // this.levelTable.toString();
        this.convertFeatures();
        return details;
    };
    Class.prototype.convertProficiencies = function () {
        var details = "";
        details += "\tArmor: \t\t\t" + this.proficiencies.armor + "\n" +
            ("\tWeapons: \t\t" + this.proficiencies.weapons + "\n") +
            "\tSaving Throws:\t";
        this.proficiencies.savingThrows.forEach(function (sv) {
            details += sv + "\n\t\t\t\t\t";
        });
        details += "\n\tChoose Amount:\t" + this.proficiencies.chooseAmount + "\n\t" +
            "Skills:";
        this.proficiencies.skills.forEach(function (skill) {
            details += "\t\t\t" + skill + "\n\t\t";
        });
        return details;
    };
    Class.prototype.convertFeatures = function () {
        var details = "";
        this.features.forEach(function (feat) {
            details += feat.name.toUpperCase() + "\n\n" +
                (feat.description.toLowerCase() + "\n\n\n");
        });
        return details;
    };
    return Class;
}());
exports.Class = Class;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBO0lBVUksZUFBWSxFQUFVLEVBQUUsSUFBWSxFQUFFLE9BQWUsRUFBRSxhQUEwQixFQUFFLGlCQUFvQyxFQUFFLFFBQXdCLEVBQUUsVUFBZ0M7UUFDL0ssSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUVNLHdCQUFRLEdBQWY7UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFLLGFBQVksSUFBSSxDQUFDLEVBQUUsT0FBSzthQUN4QixhQUFZLElBQUksQ0FBQyxJQUFJLE9BQUssQ0FBQTthQUMxQixpQkFBZ0IsSUFBSSxDQUFDLE9BQU8sU0FBTyxDQUFBO2FBQ25DLDBCQUF5QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsT0FBSyxDQUFBO2FBQ3pELG1CQUFrQixJQUFJLENBQUMsZUFBZSxFQUFLLENBQUEsQ0FBQztRQUNoRCxzQ0FBc0M7UUFDdEMsOEJBQThCO1FBQ3RDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU8sb0NBQW9CLEdBQTVCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSyxvQkFBbUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLE9BQUs7YUFDaEQsb0JBQW1CLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxPQUFLLENBQUE7WUFDbEQsb0JBQW9CLENBQUM7UUFFakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRTtZQUN0QyxPQUFPLElBQVEsRUFBRSxpQkFBZSxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFLLHlCQUF3QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksU0FBTztZQUM5RCxTQUFTLENBQUM7UUFFdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztZQUNuQyxPQUFPLElBQUksV0FBVSxLQUFLLFdBQVMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTywrQkFBZSxHQUF2QjtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7WUFDdEIsT0FBTyxJQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQU87aUJBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFdBQVMsQ0FBQSxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBNURELElBNERDO0FBNURZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZmljaWVuY3kgfSBmcm9tICcuL3Byb2ZpY2llbmN5JztcbmltcG9ydCB7IFN0YXJ0aW5nRXF1aXBtZW50IH0gZnJvbSAnLi9zdGFydGluZ0VxdWlwbWVudCc7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnLi9mZWF0dXJlJztcbmltcG9ydCB7IExldmVsVGFibGVSb3cgfSBmcm9tICcuL2xldmVsVGFibGUnO1xuXG5leHBvcnQgY2xhc3MgQ2xhc3Mge1xuXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgaGl0RGljZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwcm9maWNpZW5jaWVzOiBQcm9maWNpZW5jeTtcbiAgICBwdWJsaWMgc3RhcnRpbmdFcXVpcG1lbnQ6IFN0YXJ0aW5nRXF1aXBtZW50O1xuICAgIHB1YmxpYyBmZWF0dXJlczogQXJyYXk8RmVhdHVyZT47XG4gICAgcHVibGljIGxldmVsVGFibGU6IEFycmF5PExldmVsVGFibGVSb3c+O1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBoaXREaWNlOiBzdHJpbmcsIHByb2ZpY2llbmNpZXM6IFByb2ZpY2llbmN5LCBzdGFydGluZ0VxdWlwbWVudDogU3RhcnRpbmdFcXVpcG1lbnQsIGZlYXR1cmVzOiBBcnJheTxGZWF0dXJlPiwgbGV2ZWxUYWJsZTogQXJyYXk8TGV2ZWxUYWJsZVJvdz4pIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmhpdERpY2UgPSBoaXREaWNlO1xuICAgICAgICB0aGlzLnByb2ZpY2llbmNpZXMgPSBwcm9maWNpZW5jaWVzO1xuICAgICAgICB0aGlzLnN0YXJ0aW5nRXF1aXBtZW50ID0gc3RhcnRpbmdFcXVpcG1lbnQ7XG4gICAgICAgIHRoaXMuZmVhdHVyZXMgPSBmZWF0dXJlcztcbiAgICAgICAgdGhpcy5sZXZlbFRhYmxlID0gbGV2ZWxUYWJsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBkZXRhaWxzID0gYGA7XG4gICAgICAgIGRldGFpbHMgKz0gIGBJZDogXFx0XFx0JHsgdGhpcy5pZCB9XFxuYCArIFxuICAgICAgICAgICAgICAgICAgICBgTmFtZTogXFx0JHsgdGhpcy5uYW1lIH1cXG5gICsgXG4gICAgICAgICAgICAgICAgICAgIGBIaXQgRGljZTogXFx0JHsgdGhpcy5oaXREaWNlIH1cXG5cXG5gICtcbiAgICAgICAgICAgICAgICAgICAgYFByb2ZpY2llbmNpZXM6IFxcdFxcblxcbiR7IHRoaXMuY29udmVydFByb2ZpY2llbmNpZXMoKSB9XFxuYCArXG4gICAgICAgICAgICAgICAgICAgIGBGZWF0dXJlczogXFxuXFxuJHsgdGhpcy5jb252ZXJ0RmVhdHVyZXMoKSB9YDtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0YXJ0aW5nRXF1aXBtZW50LnRvU3RyaW5nKCkgK1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubGV2ZWxUYWJsZS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmNvbnZlcnRGZWF0dXJlcygpO1xuICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnZlcnRQcm9maWNpZW5jaWVzKCkge1xuICAgICAgICBsZXQgZGV0YWlscyA9IGBgO1xuICAgICAgICBkZXRhaWxzICs9ICBgXFx0QXJtb3I6IFxcdFxcdFxcdCR7IHRoaXMucHJvZmljaWVuY2llcy5hcm1vciB9XFxuYCArIFxuICAgICAgICAgICAgICAgICAgICBgXFx0V2VhcG9uczogXFx0XFx0JHsgdGhpcy5wcm9maWNpZW5jaWVzLndlYXBvbnMgfVxcbmAgK1xuICAgICAgICAgICAgICAgICAgICBgXFx0U2F2aW5nIFRocm93czpcXHRgO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wcm9maWNpZW5jaWVzLnNhdmluZ1Rocm93cy5mb3JFYWNoKHN2ID0+IHtcbiAgICAgICAgICAgIGRldGFpbHMgKz0gYCR7IHN2IH1cXG5cXHRcXHRcXHRcXHRcXHRgO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZXRhaWxzICs9ICBgXFxuXFx0Q2hvb3NlIEFtb3VudDpcXHQkeyB0aGlzLnByb2ZpY2llbmNpZXMuY2hvb3NlQW1vdW50IH1cXG5cXHRgICsgXG4gICAgICAgICAgICAgICAgICAgIGBTa2lsbHM6YDtcblxuICAgICAgICB0aGlzLnByb2ZpY2llbmNpZXMuc2tpbGxzLmZvckVhY2goc2tpbGwgPT4ge1xuICAgICAgICAgICAgZGV0YWlscyArPSBgXFx0XFx0XFx0JHsgc2tpbGwgfVxcblxcdFxcdGA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnZlcnRGZWF0dXJlcygpIHtcbiAgICAgICAgbGV0IGRldGFpbHMgPSBgYDtcbiAgICAgICAgdGhpcy5mZWF0dXJlcy5mb3JFYWNoKGZlYXQgPT4ge1xuICAgICAgICAgICAgZGV0YWlscyArPSAgYCR7IGZlYXQubmFtZS50b1VwcGVyQ2FzZSgpIH1cXG5cXG5gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAkeyBmZWF0LmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkgfVxcblxcblxcbmA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG59Il19