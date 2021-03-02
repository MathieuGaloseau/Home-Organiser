import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Layout
import { AppComponent } from './layout/app.component';

//Pages
import { AppAddObject } from './pages/add-object/app.add-object';
import { AppHome } from './pages/home/app.home';
import { AppSearch } from './pages/search/app.search';
import { AppFav } from './pages/fav/app.fav';

//Componant
import { AppFooter } from './module/footer/app.footer';
import { AppProgressBar } from './module/progress-bar/app.progress-bar';
import { AppObjectCard } from './module/object-card/app.object-card';

//Material
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { BottomNavModule } from 'ngx-bottom-nav';
import {MatInputModule} from '@angular/material/input'; 
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 

@NgModule({
  declarations: [
    AppComponent,
    AppFooter,
    AppProgressBar,
    AppAddObject,
    AppHome,
    AppSearch,
    AppFav,
    AppObjectCard
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
    MatInputModule,
    MatBadgeModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }