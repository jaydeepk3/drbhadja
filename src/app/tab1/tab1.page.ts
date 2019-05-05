import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    slidesPerView: 2,
  }
  constructor(private router: Router){
    
  }
  toContact(){
    this.router.navigate(['contactus']);
  }
  ratingMore(){
    this.router.navigate(['rate']);
  }
}
