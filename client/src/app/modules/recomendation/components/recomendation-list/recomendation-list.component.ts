import { recommendationData } from './../../../../app-constant';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash-es';

@Component({
  selector: 'app-recomendation-list',
  templateUrl: './recomendation-list.component.html',
  styleUrls: ['./recomendation-list.component.css']
})
export class RecomendationListComponent implements OnInit {
  /*
    registrar Form
  *
  */
  recommendationForm: FormGroup;
  hotelRequests: any;
  filteredHotelRequests: any = [];
  order: any = 'rating';
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.filteredHotelRequests = recommendationData.hotelData;
    this.hotelRequests = recommendationData.hotelData;
  }

  ngOnInit() {
    this.initializeFormFields();

  }
  private initializeFormFields(): void {
    this.recommendationForm = this.formBuilder.group({
      state: ['', Validators.required],
      district: ['', [Validators.required]],
    });
  }
  onSubmit(form) {
    this.applyFilter();
  }
  applyFilter() {
    console.log('call me');
    if (this.recommendationForm.value.state && this.recommendationForm.value.district) {
      this.filteredHotelRequests = _.filter(this.hotelRequests,
        {
          'state': this.recommendationForm.value.state,
          'district': this.recommendationForm.value.district
        });
    } else {
      this.filteredHotelRequests = this.hotelRequests;
    }
  }
}
