import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { apiPath } from 'src/environments/environment';
import { CommonService } from '../common.service';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss'],
})
export class WriteReviewComponent implements OnInit {
  name:any;
  message:any;
  rating:any;
  apiToken: any;
  constructor(private router:Router,private toast:Toast,public modalController: ModalController,private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.get(apiPath.api_genrate_token).subscribe(token=>{
      console.log(token);
      this.apiToken = token['response_data'].token;
     
    });
  }
  reviewSubmit(){
   this.modalController.dismiss();
    let formData = new FormData();
      formData.append('token',this.apiToken);
      formData.append('name',this.name);
      formData.append('description',this.message);
      formData.append('rating',this.rating);
       this.commonService.post(apiPath.api_add_rate_review,formData).subscribe(data=>{
       console.log(data);
       this.toast.show(data['response_success'], '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        });
       });
  }
  onRateChange(event){
    console.log(event)
  }
}
