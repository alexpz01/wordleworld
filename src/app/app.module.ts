import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CoreModule} from './core/core.module'
import {SharedModule} from './shared/shared.module'
import {AppRouterModule } from './app-routing.module';
import {PublicModule} from './public/public.module'

import {AppComponent} from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    SharedModule,
    AppRouterModule,
    PublicModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
