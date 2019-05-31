import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { apiPath } from 'src/environments/environment';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
  apiToken: any;
  contacts: any;

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.get(apiPath.api_genrate_token).subscribe(token=>{
      console.log(token);
      this.apiToken = token['response_data'].token;
      let formData = new FormData();
      formData.append('token',token['response_data'].token);
       this.commonService.post(apiPath.api_contact_us,formData).subscribe(data=>{
       console.log(data['response_data'])
       this.contacts = data['response_data'];
       });
    });
  }

}
