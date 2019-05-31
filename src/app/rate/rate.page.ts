import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WriteReviewComponent } from '../write-review/write-review.component';
import { apiPath } from 'src/environments/environment';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {
  @Input() rating: number;
  apiToken: any;
  rates: any;
  constructor(public modalController: ModalController, private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.get(apiPath.api_genrate_token).subscribe(token=>{
      console.log(token);
      this.apiToken = token['response_data'].token;
      let formData = new FormData();
      formData.append('token',token['response_data'].token);
       this.commonService.post(apiPath.api_get_rate_review,formData).subscribe(data=>{
       console.log(data['response_data'].rate_and_review)
       this.rates = data['response_data'].rate_and_review;
       });
    });
   
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: WriteReviewComponent,
    });
    return await modal.present();
  }
 
}
