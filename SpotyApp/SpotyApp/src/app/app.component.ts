import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ArtistaComponent } from './artista/artista.component';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SearchComponent,ArtistaComponent, RouterLinkActive,
    RouterLink,  RouterModule, CommonModule, LoadingComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SpotyApp';
}
