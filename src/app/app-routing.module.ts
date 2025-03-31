import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModaisComponent } from './modais/modais.component';

const routes: Routes = [
  { path: '', component: ModaisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
