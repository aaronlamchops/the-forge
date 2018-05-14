"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Race = /** @class */ (function () {
    function Race(id, name, abilityScore, age, alignment, size, sizeDescription, speed, language) {
        this.id = id;
        this.name = name;
        this.abilityScore = abilityScore;
        this.age = age;
        this.alignment = alignment;
        this.size = size;
        this.sizeDescription = sizeDescription;
        this.speed = speed;
        this.language = language;
    }
    Race.prototype.toString = function () {
        var details = "";
        details += "Id: \t\t\t" + this.id + "\n" +
            ("Name: \t\t" + this.name + "\n\n") +
            ("Ability Score: \t\t\n" + this.convertAbilityScore() + "\n") +
            ("Age: \n" + this.age + "\n\n") +
            ("Alignment: \n" + this.alignment + "\n\n") +
            ("Size: \t\t" + this.size + "\n") +
            (this.sizeDescription + "\n\n") +
            ("Speed: \t\t" + this.speed + "\n\n") +
            ("Language: \n" + this.language + "\n");
        return details;
    };
    Race.prototype.convertAbilityScore = function () {
        var details = "";
        this.abilityScore.value.forEach(function (ability) {
            details += "\t\t\t" + ability + "\n";
        });
        return details;
    };
    return Race;
}());
exports.Race = Race;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQVlJLGNBQVksRUFBVSxFQUFFLElBQVksRUFBRSxZQUEwQixFQUFFLEdBQVcsRUFBRSxTQUFpQixFQUFFLElBQVksRUFBRSxlQUF1QixFQUFFLEtBQWEsRUFBRSxRQUFnQjtRQUNwSyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVNLHVCQUFRLEdBQWY7UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsT0FBTyxJQUFLLGVBQWMsSUFBSSxDQUFDLEVBQUUsT0FBSzthQUMxQixlQUFjLElBQUksQ0FBQyxJQUFJLFNBQU8sQ0FBQTthQUM5QiwwQkFBeUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLE9BQUssQ0FBQTthQUN4RCxZQUFXLElBQUksQ0FBQyxHQUFHLFNBQU8sQ0FBQTthQUMxQixrQkFBaUIsSUFBSSxDQUFDLFNBQVMsU0FBTyxDQUFBO2FBQ3RDLGVBQWMsSUFBSSxDQUFDLElBQUksT0FBSyxDQUFBO2FBQ3hCLElBQUksQ0FBQyxlQUFlLFNBQU8sQ0FBQTthQUMvQixnQkFBZSxJQUFJLENBQUMsS0FBSyxTQUFPLENBQUE7YUFDaEMsaUJBQWdCLElBQUksQ0FBQyxRQUFRLE9BQUssQ0FBQSxDQUFDO1FBRy9DLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTyxrQ0FBbUIsR0FBM0I7UUFDSSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUNuQyxPQUFPLElBQUksV0FBVSxPQUFPLE9BQUssQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQztBQWxEWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFiaWxpdHlTY29yZSB9IGZyb20gJy4vYWJpbGl0eVNjb3JlJztcblxuZXhwb3J0IGNsYXNzIFJhY2Uge1xuXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgYWJpbGl0eVNjb3JlOiBBYmlsaXR5U2NvcmU7XG4gICAgcHVibGljIGFnZTogc3RyaW5nO1xuICAgIHB1YmxpYyBhbGlnbm1lbnQ6IHN0cmluZztcbiAgICBwdWJsaWMgc2l6ZTogc3RyaW5nO1xuICAgIHB1YmxpYyBzaXplRGVzY3JpcHRpb246IHN0cmluZztcbiAgICBwdWJsaWMgc3BlZWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgYWJpbGl0eVNjb3JlOiBBYmlsaXR5U2NvcmUsIGFnZTogc3RyaW5nLCBhbGlnbm1lbnQ6IHN0cmluZywgc2l6ZTogc3RyaW5nLCBzaXplRGVzY3JpcHRpb246IHN0cmluZywgc3BlZWQ6IG51bWJlciwgbGFuZ3VhZ2U6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hYmlsaXR5U2NvcmUgPSBhYmlsaXR5U2NvcmU7XG4gICAgICAgIHRoaXMuYWdlID0gYWdlO1xuICAgICAgICB0aGlzLmFsaWdubWVudCA9IGFsaWdubWVudFxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnNpemVEZXNjcmlwdGlvbiA9IHNpemVEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBkZXRhaWxzID0gYGA7XG5cbiAgICAgICAgZGV0YWlscyArPSAgYElkOiBcXHRcXHRcXHQkeyB0aGlzLmlkIH1cXG5gICtcbiAgICAgICAgICAgICAgICAgICAgYE5hbWU6IFxcdFxcdCR7IHRoaXMubmFtZSB9XFxuXFxuYCArXG4gICAgICAgICAgICAgICAgICAgIGBBYmlsaXR5IFNjb3JlOiBcXHRcXHRcXG4keyB0aGlzLmNvbnZlcnRBYmlsaXR5U2NvcmUoKSB9XFxuYCArXG4gICAgICAgICAgICAgICAgICAgIGBBZ2U6IFxcbiR7IHRoaXMuYWdlIH1cXG5cXG5gICtcbiAgICAgICAgICAgICAgICAgICAgYEFsaWdubWVudDogXFxuJHsgdGhpcy5hbGlnbm1lbnQgfVxcblxcbmAgK1xuICAgICAgICAgICAgICAgICAgICBgU2l6ZTogXFx0XFx0JHsgdGhpcy5zaXplIH1cXG5gICtcbiAgICAgICAgICAgICAgICAgICAgYCR7IHRoaXMuc2l6ZURlc2NyaXB0aW9uIH1cXG5cXG5gICtcbiAgICAgICAgICAgICAgICAgICAgYFNwZWVkOiBcXHRcXHQkeyB0aGlzLnNwZWVkIH1cXG5cXG5gICtcbiAgICAgICAgICAgICAgICAgICAgYExhbmd1YWdlOiBcXG4keyB0aGlzLmxhbmd1YWdlIH1cXG5gO1xuXG5cbiAgICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb252ZXJ0QWJpbGl0eVNjb3JlKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBkZXRhaWxzID0gYGA7XG5cbiAgICAgICAgdGhpcy5hYmlsaXR5U2NvcmUudmFsdWUuZm9yRWFjaChhYmlsaXR5ID0+IHtcbiAgICAgICAgICAgIGRldGFpbHMgKz0gYFxcdFxcdFxcdCR7IGFiaWxpdHkgfVxcbmA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbn0iXX0=