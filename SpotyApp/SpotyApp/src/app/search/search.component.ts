import { Component } from '@angular/core';
import { SpotifyService } from '../servicise/spotify.service';
import { CommonModule } from '@angular/common';
import { ArreImagesPipe } from '../pipes/arre-images.pipe';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ArreImagesPipe, TarjetasComponent,LoadingComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  artistas: any[]=[];
  loadingm:boolean=true;

  constructor( private spoty: SpotifyService){

    this.loadingm=false;
   
  }

  

  buscar(event: Event, termino: string) {

    this.loadingm=true;


    this.spoty.getBucarArtista(termino)
    .subscribe((resp:any) => { console.log(resp) 
      this.artistas=resp
      this.loadingm=false;
    })

    

    event.preventDefault();
    console.log(termino);
  }

}
