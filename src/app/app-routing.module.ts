import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitSearchFormComponent } from './git-search-form/git-search-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OutputComponent } from './output/output.component';

const routes: Routes = [
  { path: '', component:GitSearchFormComponent},
  { path: 'output', component:OutputComponent },
  { path: '', redirectTo:'/output', pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
