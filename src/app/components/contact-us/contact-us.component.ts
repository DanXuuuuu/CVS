import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  successMessage:string | null=null;
  onSubmit(form: NgForm): void {
  if (form.valid) {
    const { name, message } = form.value;
    this.successMessage = `Thank you, ${name}! Your message was: "${message}"`;
    form.reset(); 
  } else {
    this.successMessage = null;
  }
}
}
