import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss'],
})
export class WriteReviewComponent implements OnInit {

  constructor(private router:Router,public modalController: ModalController) { }

  ngOnInit() {}
  reviewSubmit(){
   this. modalController.dismiss()
  }
}
