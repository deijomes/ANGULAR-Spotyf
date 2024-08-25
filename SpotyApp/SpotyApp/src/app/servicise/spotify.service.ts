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
    
    const accessToken = 'BQByRYaU3AGrfL29hfpIX9WrYGjwLUW_IaJKwT9ED9LBpYMovAYfgDYIfl7OFrGNKmZkncD1_e1O48IMqc7L5sbc22tmBcqRmXnSo_vR6qdPjhdyeWY'
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
