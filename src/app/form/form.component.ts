import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personasService.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  //@Output() personaCreada = new EventEmitter<Persona>();
  @ViewChild('apellidoInp', {static: false}) apellidoInp: ElementRef;
  //nombreInp:string;
  //apellidoInp:string;

  constructor(private logginService:LoggingService,
        private personaService : PersonasService) { }

  onAddPersona(nombreInp:HTMLInputElement){
    let persona1 = new Persona (nombreInp.value, this.apellidoInp.nativeElement.value);
    this.logginService.enviarMensajeConsola(`Nombre: ${persona1.nombre} Apellido: ${persona1.apellido}`);

    //Metodo para enviar información a otro componente
    //this.personaCreada.emit(persona1);
    
    //this.nombreInp = "";
    //this.apellidoInp = "";

    // Formulario enviando el contenido con el servicio inyectado en el constructor.
    this.personaService.addPersona(persona1);
  }

}
