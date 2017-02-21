import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { UserhomeComponent } from './userhome/userhome';
import { SearchBox } from './userhome/searchbox';
import { Tabs } from './userhome/tabs';
import { ChatComponent } from './chatwindow/chat';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'userhome', component: UserhomeComponent },
  { path: 'tabs', component: Tabs },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserhomeComponent,
    SearchBox,
    Tabs,
    ChatComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}