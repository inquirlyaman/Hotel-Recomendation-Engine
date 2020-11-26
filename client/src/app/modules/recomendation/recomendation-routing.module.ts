import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecomendationListComponent as recommendations } from './components/recomendation-list/recomendation-list.component';
const routes: Routes = [
  {
    path: 'recommendations', component: recommendations
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecomendationRoutingModule { }
