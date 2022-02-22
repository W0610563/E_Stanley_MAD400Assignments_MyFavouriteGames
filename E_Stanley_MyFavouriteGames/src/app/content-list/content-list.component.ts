import { Component, OnInit } from '@angular/core';
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  gameList: Content[];
  titleFound?: boolean;

  constructor() {
    this.gameList = [{
      id: 0,
      title: 'MineCraft',
      description: 'A world made of blocks ready for adventure. Craft, create, mine and explore.',
      creator: 'Mojang',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
      type: 'All Platforms'
    },
    {
      id: 1,
      title: 'League of Legends',
      description: 'A competitive strategy game with over hundreds of characters to learn.',
      creator: 'Riot Games',
      imgURL: 'https://m.media-amazon.com/images/M/MV5BYjM2NmU3YmEtZDI1OC00NTQ5LWJmOGMtYmZmNGUyMWRlODBmXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg',
      type: 'PC'
    },
    {
      id: 2,
      title: 'Valorant',
      description: 'A competitive first person shooter skill based team game.',
      creator: 'Riot Games',
      imgURL: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-272x380.jpg',
      type: 'PC'
    },
    {
      id: 3,
      title: 'CSGO',
      description: 'A competitive first person shooter skill based team game.',
      creator: 'Valve Corporation',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg',
      type: 'PC'
    },
    {
      id: 4,
      title: 'Team Fortress 2',
      description: 'Real time first person shooter open workshop team objective game.',
      creator: 'Valve Corporation',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Tf2_standalonebox.jpg/220px-Tf2_standalonebox.jpg',
      type: 'PC'
    },
    {
      id: 5,
      title: 'Terraria',
      description: 'Survival 2D adventure game with bosses and monsters to fight.',
      creator: 'Re-Logic',
      imgURL: 'https://m.media-amazon.com/images/M/MV5BYWU2YmJhZTktNTcxYy00ZmYwLTg2MmQtM2Q5MTZmZjRiNjRkXkEyXkFqcGdeQXVyNzg3NjQyOQ@@._V1_.jpg',
      type: 'All Platforms'
    },
    {
      id: 6,
      title: 'Raft',
      description: 'Survival open world game to explore islands and the ocean.',
      creator: 'Redbeet Interactive',
      imgURL: 'https://static-cdn.jtvnw.net/ttv-boxart/494925_IGDB-272x380.jpg',
      type: ''
    }]
  }

  ngOnInit(): void {
  }

  checkForTitle(title: string): void {
    if (this.gameList.some(e => e.title === title)) {
      this.titleFound = true;
    } else {
      this.titleFound = false;
    }
    if (this.gameList.filter(e => e.title === title).length) {
      this.titleFound = true;
    } else {
      this.titleFound = false;
    }
  }

}
