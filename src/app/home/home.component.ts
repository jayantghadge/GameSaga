import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  trendingGames: any;
  popularGames: any;
  latestGames:any;
  ratedGames: any;
  sliderValue = 0;
  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(): void{
    this.getTrendingGames();
    this.getPopularGames();
    this.getLatestGames();
    this.getRatedGames();
  }
  getTrendingGames() {
    this.http.get('/api/games?sort-by=trending').subscribe((games) => {
      this.trendingGames = games;
      console.log(this.trendingGames);
    });
  }

  getPopularGames() {
    this.http.get('/api/games?sort-by=popularity').subscribe((games) => {
      this.popularGames = games;
      console.log(this.popularGames);
    });
  }

  getRatedGames() {
    this.http.get('/api/games?sort-by=rating').subscribe((games) => {
      this.ratedGames = games;
      console.log(this.ratedGames);
    });
  }

  getLatestGames() {
    this.http.get('/api/games?sort-by=release-date').subscribe((games) => {
      this.latestGames = Object.values(games).slice(0, 12);
      console.log(this.latestGames);
    });
  }
  
  goToGame(type:string, id:string){
    this.router.navigate(['game', type,id])
  }
  
}  
