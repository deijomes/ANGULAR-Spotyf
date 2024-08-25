import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 

    console.log("listo")
  }

  getQuery(query: string){

    const url = `https://api.spotify.com/v1/${query}`;
    
    const accessToken = 'BQALT8yKZzq8WrsDGIK7cpw6WYF-5TridqIx1MEh7vCiBRC7_yIKaVpskQFDUOI19FmPL-5RKnG9UeZJ7RhFCDD1qykMapce_XWZj3QhF9rqGghTdYY'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`});

      return this.http.get(url, {headers});



  }

  getNewLanzamiento(){

    return this.getQuery('browse/new-releases')
     .pipe (map((Data:any) =>  Data.albums.items))
   

  }

  getBucarArtista(termino:string){

    return this.getQuery(`search?query=${termino}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9%2Cen%3Bq%3D0.8&offset=0&limit=20`)
    .pipe(map((resp:any) =>  resp.artists.items))

  }
  getArtista (id:string){
    return this.getQuery(`artists/${id}`)
    
  }

  getTopTracks (id:string){
    return this.getQuery(`artists/${id}/top-tracks`)
    .pipe(map((resp:any) =>  resp['tracks']))
    
  }
}
