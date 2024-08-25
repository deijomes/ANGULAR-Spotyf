import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arreImages',
  standalone: true
})
export class ArreImagesPipe implements PipeTransform {

  transform(images:any[]): string { 
    
    if(!images){
      return 'img/A-64.png';
    }

    if(images.length>0 ){
      return images[0].url; 
    } else {
      return 'img/A-64.png'
    }
    
  
  }

}
