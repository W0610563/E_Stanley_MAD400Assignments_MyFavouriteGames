import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'typeFilter'
})
export class ContentListPipe implements PipeTransform {

  transform(gameList: Content[], type?: string): Content[] {
    return gameList.filter(game => {
      console.log("game name: ", game.title, " type is set to ", game.type);
      return type ? game.type === type : (!game.type || game.type === '');
    });
  }

}
