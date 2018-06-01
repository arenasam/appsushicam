import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {RegistroService} from './registro.service';
import {NotificationService} from '../shared/messages/notification.service';

@Component({
  selector: 'mt-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
  constructor(
  	private formBuilder: FormBuilder, 
  	private registroService: RegistroService,
  	private notificationService: NotificationService,
  	private router: Router) { }

  ngOnInit() {
  	this.registroForm = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      sobrenome: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      telefone: this.formBuilder.control('', [Validators.required]),
      telefone2: this.formBuilder.control(''),
      telefone3: this.formBuilder.control(''),
      senha: this.formBuilder.control('', [Validators.required]),
      confirmarSenha: this.formBuilder.control('', [Validators.required])
    }, {validator: RegistroComponent.equalsTo});
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean} {
    const senha = group.get('senha');
    const confirmarSenha = group.get('confirmarSenha');
    if(!senha || !confirmarSenha){
      return undefined;
    }

    if(senha.value !== confirmarSenha.value){
      return {senhaNotMatch: true};
    }

    return undefined;
  }

  registro(dados: any){
  	//this.registroService.registrar(dados);
  	this.registroService.registrar(this.registroForm.value)
      .subscribe(idCliente => this.notificationService.notify(`Cadastro efetuado com sucesso!`),
        response => this.notificationService.notify(response.error.message),
        () => this.router.navigate(['/login']));
  }


}