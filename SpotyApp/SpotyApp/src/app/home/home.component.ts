
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { SpotifyService } from '../servicise/spotify.service';
import { ArreImagesPipe } from '../pipes/arre-images.pipe';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { LoadingComponent } from '../loading/loading.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ArreImagesPipe, TarjetasComponent, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nuevasCanciones :any[]= [];
  loading: Boolean =true;
  error: any;
  mensajeError : string = '';


  constructor(  private spoty : SpotifyService){

    this.error=false;
    
    this.spoty.getNewLanzamiento()
    .subscribe(
      (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
        
      },
      (erroservicio: any) => { this.loading=true;
        
        this.error = erroservicio;
        this.mensajeError = (erroservicio.error.error.message);
        this.loading = false;

       
      }
    );
  
      

  }


  

}
