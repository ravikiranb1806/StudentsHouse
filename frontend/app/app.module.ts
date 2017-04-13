import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { UserhomeComponent } from './userhome/userhome';
import { SearchBox } from './userhome/searchbox';
import { RequestsComponent } from './userhome/requests';
import { SettingsComponent } from './userhome/settings';
import { BlockedComponent } from './userhome/blocked';
import { NavbarComponent } from './userhome/navbar';
import { AccommodatorsComponent } from './userhome/accommodators';




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'userhome', component: UserhomeComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'blocked', component: BlockedComponent }
];

@NgModule({
  imports: [ 
    BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserhomeComponent,
    SearchBox,
    RequestsComponent,
    SettingsComponent,
    BlockedComponent,
    NavbarComponent,
    AccommodatorsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}