import {Injectable} from "@angular/core";
import {UiCard} from "@shared/components/card/card.component";
import {Gif} from "./gifs-response";

@Injectable({providedIn: "root"})
export class CardMapper {

  toModel({title, images: {downsized_medium}}: Gif): UiCard {
    return {
      description: title,
      image: downsized_medium
    }
  }
}
