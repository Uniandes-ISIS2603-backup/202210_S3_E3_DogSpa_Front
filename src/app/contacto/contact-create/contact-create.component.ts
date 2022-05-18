import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  contactoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,



  ) { }

  createBook(contacto: Contacto) {
    if (!this.contactoForm.valid) return;
    console.log (this.contactoForm.valid);
  }




  cancelCreation() {
    this.toastr.warning("El mensaje no se ha creado","No se ha creado el mensaje");
    this.contactoForm.reset();
  }


  ngOnInit() {

    this.contactoForm = this.formBuilder.group({
      nombre:['',[Validators.required,Validators.minLength(2)]],
      apellido: ['',[Validators.required,Validators.minLength(2)]],
      correo:['',[Validators.required,Validators.minLength(2)]],
      mensaje:['',[Validators.required,Validators.maxLength(250)]],
    });
  }

}
