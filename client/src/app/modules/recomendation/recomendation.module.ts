import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecomendationRoutingModule } from './recomendation-routing.module';
import { RecomendationListComponent } from './components/recomendation-list/recomendation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-rating';
@NgModule({
  imports: [
    CommonModule,
    RecomendationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule
  ],
  declarations: [RecomendationListComponent]
})
export class RecomendationModule { }
