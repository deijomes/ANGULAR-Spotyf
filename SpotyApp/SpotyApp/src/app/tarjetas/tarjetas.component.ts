import { CommonModule } from '@angular/common';
import { Component, Input,} from '@angular/core';
import { ArreImagesPipe } from '../pipes/arre-images.pipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [CommonModule, ArreImagesPipe],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {

  @Input() intems :any []=[];

  constructor(private router:Router){}


  verArtista(item:any){

    let artistaId

    if( item.type=== 'artist'){
      artistaId = item.id;
    } else {artistaId= item.artists[0].id}

    this.router.navigate(['/artist',artistaId])
  }


}
