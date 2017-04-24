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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_1 = require("./home/home");
var homenavbar_1 = require("./home/homenavbar");
var login_1 = require("./login/login");
var signup_1 = require("./signup/signup");
var userhome_1 = require("./userhome/userhome");
var auserhome_1 = require("./Accommodator/auserhome");
var requests_1 = require("./userhome/requests");
var settings_1 = require("./userhome/settings");
var blocked_1 = require("./userhome/blocked");
var navbar_1 = require("./userhome/navbar");
var accommodators_1 = require("./userhome/accommodators");
var students_1 = require("./Accommodator/students");
var arequests_1 = require("./Accommodator/arequests");
var asettings_1 = require("./Accommodator/asettings");
var ablocked_1 = require("./Accommodator/ablocked");
var users_service_1 = require("./services/users.service");
var admin_1 = require("./admin/admin");
var appRoutes = [
    { path: '', component: home_1.HomeComponent },
    { path: 'login', component: login_1.LoginComponent },
    { path: 'signup', component: signup_1.SignupComponent },
    { path: 'userhome', component: userhome_1.UserhomeComponent },
    { path: 'auserhome', component: auserhome_1.AUserhomeComponent },
    { path: 'requests', component: requests_1.RequestsComponent },
    { path: 'settings', component: settings_1.SettingsComponent },
    { path: 'blocked', component: blocked_1.BlockedComponent },
    { path: 'arequests', component: arequests_1.ARequestsComponent },
    { path: 'asettings', component: asettings_1.ASettingsComponent },
    { path: 'ablocked', component: ablocked_1.ABlockedComponent },
    { path: 'admin', component: admin_1.AdminComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            app_component_1.AppComponent,
            home_1.HomeComponent,
            login_1.LoginComponent,
            signup_1.SignupComponent,
            userhome_1.UserhomeComponent,
            auserhome_1.AUserhomeComponent,
            requests_1.RequestsComponent,
            settings_1.SettingsComponent,
            blocked_1.BlockedComponent,
            arequests_1.ARequestsComponent,
            asettings_1.ASettingsComponent,
            ablocked_1.ABlockedComponent,
            navbar_1.NavbarComponent,
            accommodators_1.AccommodatorsComponent,
            students_1.StudentsComponent,
            homenavbar_1.HomenavbarComponent,
            admin_1.AdminComponent
        ],
        providers: [
            users_service_1.UsersService
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
