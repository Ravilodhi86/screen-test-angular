import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.scss']
})
export class SendemailComponent implements OnInit {
  loading = false;
  isSuccessMessage= false;
  sendEmailFormGroup = new FormGroup({
  email : new FormControl('', [Validators.required,  Validators.maxLength(20)]),
  subject : new FormControl('', [Validators.required, Validators.maxLength(200)]),
  message : new FormControl('', [Validators.required, Validators.maxLength(200)])
  });
 
  constructor() { }
  ngOnInit(){
    
  }

  onSubmit(): void {
    if (this.sendEmailFormGroup.dirty && this.sendEmailFormGroup.valid) {
    console.log(this.sendEmailFormGroup.value);  
    this.loading = true;
    this.isSuccessMessage = true;

    setTimeout(()=>{
      this.loading = false;
      this.isSuccessMessage = true;
    },3000)
  }
  }

  resetFrom(){
    this.sendEmailFormGroup.reset();
    // this.sendEmailFormGroup.setValue({email: '', subject: '', message:''});
  }
}
