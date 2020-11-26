import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecomendationRoutingModule } from './recomendation-routing.module';
import { RecomendationListComponent } from './components/recomendation-list/recomendation-list.component';

@NgModule({
  imports: [
    CommonModule,
    RecomendationRoutingModule
  ],
  declarations: [RecomendationListComponent]
})
export class RecomendationModule { }
