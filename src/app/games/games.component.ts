import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  type = '';
  id = '';
  url='';
  games: any;
  game: any;

  constructor(private route: ActivatedRoute, private http: HttpClient ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.url = `/api/game?id=${this.id}`;
    this.getGame();

  }

  getGame(){
    console.log(this.url)
    this.http.get(this.url).subscribe((games)=>{
      this.game = games;
    })
  }
}
