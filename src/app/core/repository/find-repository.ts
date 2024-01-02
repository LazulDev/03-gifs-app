import {Observable} from "rxjs";

export interface FindRepository<T> {
  findByQuery(query: string): Observable<T>;
}
