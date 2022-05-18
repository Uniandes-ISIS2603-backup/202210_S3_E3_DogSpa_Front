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


  cancelCreation() {
    this.toastr.warning("El mensaje no se ha creado");
    this.contactoForm.reset();
  }


  ngOnInit() {

    this.contactoForm = this.formBuilder.group({
      nombre:['',[Validators.required,Validators.minLength(2)]],
      apellido: ['',Validators.required],
      correo:['',Validators.required],
      mensaje:['',[Validators.required,Validators.maxLength(250)]],
    });
  }

}
