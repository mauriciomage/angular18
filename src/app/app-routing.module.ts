import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeferComponent } from './components/defer/defer.component';
import { AppComponent } from './app.component';
import { SignalsComponent } from './components/signals/signals.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsComponent
  },
  {
    path: 'defers',
    component: DeferComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
