import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  trendingGames: any;
  popularGames: any;
  latestGames: any;
  ratedGames: any;
  sliderValue = 0;
  loading: boolean = true;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getTrendingGames();
    this.getPopularGames();
    this.getLatestGames();
    this.getRatedGames();
  }
  getTrendingGames() {
    this.http
      .get(
        'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=trending',
        {
          headers: {
            'X-Rapidapi-Key':
              'f9ea1431e2mshedd67e8b03ee1a0p10eaa4jsn1c893aa7579d',
            'X-Rapidapi-Host': 'free-to-play-games-database.p.rapidapi.com',
          },
        }
      )
      .subscribe((games) => {
        this.trendingGames = games;
        this.loading = false;
        console.log(this.trendingGames);
      });
  }

  getPopularGames() {
    this.http
      .get(
        'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity',
        {
          headers: {
            'X-Rapidapi-Key':
              'f9ea1431e2mshedd67e8b03ee1a0p10eaa4jsn1c893aa7579d',
            'X-Rapidapi-Host': 'free-to-play-games-database.p.rapidapi.com',
          },
        }
      )
      .subscribe((games) => {
        this.popularGames = games;
        console.log(this.popularGames);
      });
  }

  getRatedGames() {
    this.http
      .get(
        'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=rating',
        {
          headers: {
            'X-Rapidapi-Key':
              'f9ea1431e2mshedd67e8b03ee1a0p10eaa4jsn1c893aa7579d',
            'X-Rapidapi-Host': 'free-to-play-games-database.p.rapidapi.com',
          },
        }
      )
      .subscribe((games) => {
        this.ratedGames = games;
        console.log(this.ratedGames);
      });
  }

  getLatestGames() {
    this.http
      .get(
        'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date',
        {
          headers: {
            'X-Rapidapi-Key':
              'f9ea1431e2mshedd67e8b03ee1a0p10eaa4jsn1c893aa7579d',
            'X-Rapidapi-Host': 'free-to-play-games-database.p.rapidapi.com',
          },
        }
      )
      .subscribe((games) => {
        this.latestGames = Object.values(games).slice(0, 12);
        console.log(this.latestGames);
      });
  }

  goToGame(type: string, id: string) {
    this.router.navigate(['game', type, id]);
  }
}
