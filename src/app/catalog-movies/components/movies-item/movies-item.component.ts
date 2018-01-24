import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/Movie.model';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-movie-item',
  template: `
  <mat-card class="example-card">
  <img mat-card-image class="mat-card-image img-thumbnail" src="{{movie.imagePath}}" alt="Photo of movie">
  <span class="stars">
      <span class="star-rates">
          <i class="material-icons star-rate" style="text-align:center" *ngFor="let rate of rateStars">star_rate</i>
      </span>
      <span class="star-rates">
          <i class="material-icons non-star-rate" style="text-align:center" *ngFor="let rate of nonrateStars">star_rate</i>
      </span>
      <h4 style="text-align:center">{{movie.title}}</h4>
  </span>
  <mat-card-content style="height: 110px; overflow: hidden;">
    {{movie.description}}
  </mat-card-content>
  <hr>
  <mat-card-actions>
    <button _ngcontent-c11="" class="mat-button" md-button="">
      <span class="mat-button-wrapper">
        <i _ngcontent-c11="" class="material-icons">add_shopping_cart</i>
      </span>
      <div class="mat-button-ripple mat-ripple" mat-ripple=""></div>
      <div class="mat-button-focus-overlay"></div>
    </button>
    <button _ngcontent-c11="" class="mat-button" md-button="" [routerLink]="['../movies', movie.title]">
      <span class="mat-button-wrapper">
        <i _ngcontent-c11="" class="material-icons">search</i>
      </span>
      <div class="mat-button-ripple mat-ripple" mat-ripple=""></div>
      <div class="mat-button-focus-overlay"></div>
    </button>
  </mat-card-actions>
</mat-card>
  `,
  styles: [`
  mat-card{
    width: 300px !important;
    margin: 25px 5px 20px 5px;
  }
  mat-card:hover{
    box-shadow: 3px 3px 16px -2px rgba(0, 0, 0, .5);
  }

  .mat-card-actions{
      padding: 0px 0px 5px 0px !important;
      text-align: center;
  }
  mat-card-title{
    padding: 0px !important;
  }
  .mat-card-image{
    height: 150px;
    width: 120px !important;
    margin: -25px 0px 10px 22px !important;
    box-shadow: 0 12px 20px -10px #263238c4, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0);
  }
  hr{
    margin-bottom: 6px;
    width: 80%;
  }
  .stars{
    text-align: center;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    margin-top:15px;
    width: 53%;
  }
  .star-rates{
    margin: -1px;
  }
  .star-rate{
    width:18px;
    font-size: 20px;
    color: #ffc107;
  }
  .non-star-rate{
    width: 18px;
    font-size: 20px;
    color:#9e9e9e;
  }
  
  `]
})
export class MoviesItemComponent implements OnInit {

  @Input('movie') movie: Movie;
  rateStars: string[] = [];
  nonrateStars: string[] = [];
  constructor(private catalogService: MoviesService) { }

  ngOnInit() {
    for (let i = 1; i <= this.getMovieRatesStars(); i++) {
      this.rateStars.push('star_rate');
    }
    for (let i = 1; i <= 5 - this.getMovieRatesStars(); i++) {
      this.nonrateStars.push('star_rate');
    }
  }

  getMovieRatesStars() {
    return this.catalogService.getMovieRatesStars(this.movie);
  }

  getMovieNonRatesStars() {
    return this.catalogService.getMovieNonRatesStars(this.movie);
  }

}