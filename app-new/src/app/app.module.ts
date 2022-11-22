import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// для работы с формами и привязки данных
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';


@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
