import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/app-routing.module/app.component';
import { AppMenu } from './module/menu/app.menu';
import { AppFooter } from './module/footer/app.footer';
import { AppProgressBar } from './module/progress-bar/app.progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 

import { BottomNavModule } from 'ngx-bottom-nav';

@NgModule({
  declarations: [
    AppComponent,
    AppMenu,
    AppFooter,
    AppProgressBar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    BrowserModule,
    BottomNavModule,

  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
