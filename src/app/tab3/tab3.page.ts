import { Component } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { CommonService } from '../common.service';
import { apiPath } from 'src/environments/environment';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  appoitmentForm: FormGroup;
  apiToken: any;
  constructor(private fb: FormBuilder,
    private toast:Toast,
    private commonService : CommonService) {
      this.commonService.get(apiPath.api_genrate_token).subscribe(token=>{
        console.log(token);
        this.apiToken = token['response_data'].token;
      })
    this.appoitmentFormBuilder();
  }
  appoitmentFormBuilder(): void {
    this.appoitmentForm = this.fb.group({
      firstname: ["jaydeep", Validators.required],
      lastname: ["kataria", Validators.required],
      email: [""],
      patient_id: [""],
      contact: ["1234567890", Validators.required],
      doc_name: ["Dr Dharmesh Bhadja", Validators.required],
      date: ["29-05-2019", Validators.required],
      time: ["E", Validators.required],
      reason: ["Other", Validators.required],
      message: ["test"]
    });
  }
  submitValue(): void {
  console.log(this.appoitmentForm.getRawValue());
  var formValue = this.appoitmentForm.getRawValue();
  console.log(this.apiToken);
   var params = {token:this.apiToken,...formValue,device_id:'740bf6ea98bf4328'}
   console.log(params);
   let formData = new FormData();
   formData.append('token',this.apiToken);
   formData.append('firstname',formValue.firstname);
   formData.append('lastname',formValue.lastname);
   formData.append('email',formValue.email);
   formData.append('patient_id',formValue.patient_id);
   formData.append('contact',formValue.contact);
   formData.append('doc_name',formValue.doc_name);
   formData.append('date',formValue.date);
   formData.append('time',formValue.time);
   formData.append('reason',formValue.reason);
   formData.append('device_id','740bf6ea98bf4328');
   this.commonService.post(apiPath.api_appointment,formData).subscribe(res=>{
     console.log(res);
     console.log(res['response_success']);
     this.toast.show(res['response_success'], '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      });
  });
}
}
