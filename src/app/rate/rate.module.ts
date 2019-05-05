import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RatePage } from './rate.page';
import { IonicRatingModule } from 'ionic4-rating';
import { WriteReviewComponent } from '../write-review/write-review.component';

const routes: Routes = [
  {
    path: '',
    component: RatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RatePage, WriteReviewComponent],
  entryComponents:[WriteReviewComponent]
})
export class RatePageModule {}
