import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
  type = '';
  id = '';
  url = '';
  games: any;
  game: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`;
    this.getGame();
  }

  getGame() {
    const headers = new HttpHeaders().set(
      'X-Rapidapi-Key',
      'f9ea1431e2mshedd67e8b03ee1a0p10eaa4jsn1c893aa7579d'
    );

    this.http.get(this.url, { headers }).subscribe((game) => {
      this.game = game;
    });
  }
}
