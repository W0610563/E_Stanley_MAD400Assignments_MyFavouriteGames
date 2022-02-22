import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  list: ContentList;
  item1: Content;
  item2: Content;
  item3: Content;

  constructor() {
    this.item1 = {
      id: 0,
      title: 'MineCraft',
      description: 'A world made of blocks ready for adventure. Craft, create, mine and explore.',
      creator: 'Mojang',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
      type: 'All Platforms'
    };
    this.item2 = {
      id: 0,
      title: 'League of Legends',
      description: 'A competitive strategy game with over hundreds of characters to learn.',
      creator: 'Riot Games',
      imgURL: 'https://m.media-amazon.com/images/M/MV5BYjM2NmU3YmEtZDI1OC00NTQ5LWJmOGMtYmZmNGUyMWRlODBmXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg',
      type: 'PC'
    };
    this.item3 = {
      id: 0,
      title: 'Valorant',
      description: 'A competitive first person shooter skill based team game.',
      creator: 'Riot Games',
      imgURL: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-272x380.jpg',
      type: 'PC'
    };
    this.list = new ContentList();
    this.list.addContent(this.item1);
    this.list.addContent(this.item2);
    this.list.addContent(this.item3);
  }

  ngOnInit(): void {
  }

}
