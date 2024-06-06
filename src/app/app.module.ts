import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DumbComponent } from './components/dumb/dumb.component';
import { DeferComponent } from './components/defer/defer.component';
import { SignalsComponent } from './components/signals/signals.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DetailsComponent } from './components/details/details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    DumbComponent,
    DeferComponent,
  SignalsComponent,
  DetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
