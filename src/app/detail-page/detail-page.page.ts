import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { apiPath } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.page.html',
  styleUrls: ['./detail-page.page.scss'],
})
export class DetailPagePage implements OnInit {
  apiToken: any;
  details: any;

  constructor(private commonService:CommonService, private route:ActivatedRoute) { }

  ngOnInit() {
   var params =  this.route.snapshot.paramMap.get('id');
    this.commonService.get(apiPath.api_genrate_token).subscribe(token=>{
      console.log(token);
      this.apiToken = token['response_data'].token;
      let formData = new FormData();
      formData.append('token',token['response_data'].token);
      formData.append('key',params);
       this.commonService.post(apiPath.api_static,formData).subscribe(data=>{
       console.log(data['response_data'])
       this.details = data['response_data'];
       });
    });
  }

}
