import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WriteReviewComponent } from '../write-review/write-review.component';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {
  @Input() rating: number;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: WriteReviewComponent,
    });
    return await modal.present();
  }

}
