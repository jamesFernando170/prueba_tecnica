import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherViewComponent } from './other-view/other-view.component';

export const routes: Routes = [
    { path: 'other-view', component: OtherViewComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }