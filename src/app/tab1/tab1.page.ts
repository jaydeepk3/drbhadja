import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  slideOpts = {
    initialSlide: 0,
    speed: 500,
    slidesPerView: 1.2,
  };
  diseasesSlideOpts ={
    initialSlide: 0,
    speed: 500,
    slidesPerView: 3,
  }
}
