"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SearchBox = (function () {
    function SearchBox() {
    }
    return SearchBox;
}());
SearchBox = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search-box',
        template: "<input id=\"inputbox\" placeholder=\"search here\">\n                <button class=\"btn btn-default\">Search</button>"
    }),
    __metadata("design:paramtypes", [])
], SearchBox);
exports.SearchBox = SearchBox;
