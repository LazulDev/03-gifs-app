import {HttpClient, HttpParams} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {CardMapper} from "@features/gifs/infrastructure/card-mapper";
import {UiCard} from "@shared/components/card/card.component";
import {map} from "rxjs";
import {environment} from "../../../../environments/environment";
import {FindRepository} from "../../../core/repository/find-repository";
import {GifsResponse} from "./gifs-response";

@Injectable()
export class GifsHttpRepository implements FindRepository<UiCard[]> {

  private readonly URL = environment.gifsApi;
  constructor(private readonly httpClient: HttpClient,
              private readonly mapper: CardMapper) { }

   findByQuery(query: string) {
    const url = `${this.URL}/search`;

    const params = new HttpParams()
      .set('api_key', environment.apiKey)
      .set('limit', 10)
      .set('q', query);

    return this.httpClient.get<GifsResponse>(url, {params})
      .pipe(map(({data}) => data.map(gif => this.mapper.toModel(gif))));
  }
}
