
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SpotifyService } from '../servicise/spotify.service';
import { ArreImagesPipe  } from '../pipes/arre-images.pipe';
import { LoadingComponent } from '../loading/loading.component';
import { CommonModule } from '@angular/common';
import {DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';





@Component({
  selector: 'app-artista',
  standalone: true,
  imports: [ArreImagesPipe, RouterLink, LoadingComponent, CommonModule],
  templateUrl: './artista.component.html',
  styleUrl: './artista.component.css'
})
export class ArtistaComponent {

  artist:any={};
  loadin: Boolean =true;
  topTracks : any []=[];
  safeTrackUrls: SafeResourceUrl[] = [];


  constructor(private ruter:ActivatedRoute, private service: SpotifyService, private sanitizer: DomSanitizer ){
    this.loadin=true
    this.ruter.params.subscribe(params =>
       {this.getArtista(params['id']); 
        this.getTopTracks(params['id'])} 
    
  )}

   

  getArtista(id:string){

    this.loadin=true;

    this.service.getArtista(id)
      .subscribe(artista => {console.log(artista);  
        this.artist=artista; this.loadin=false})  
        
  }

  getTopTracks(id: string): void {
    this.service.getTopTracks(id).subscribe(tracks => {
      console.log(tracks);
      this.topTracks = tracks;
      this.safeTrackUrls = tracks.map((track: any) => this.sanitizeUrl(track.uri));
    });

  }

  sanitizeUrl(uri: string): SafeResourceUrl {
    const trackId = uri.split(':').pop(); // Extraer el ID del URI
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://open.spotify.com/embed/track/${trackId}`);
  }

   
  

}


