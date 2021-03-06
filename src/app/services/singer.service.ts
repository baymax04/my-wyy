import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from './services.module';
import { Observable } from 'rxjs';
import { Singer } from './data-types/common.types';
import { map } from 'rxjs/internal/operators';
import queryString from 'query-string';

// 定义类型
interface SingerParams {
  offset: number; // 分页
  limit: number;
  cat?: string;
}

const defaultParams: SingerParams = {
  offset: 0, // 分页
  limit: 9,
  cat: '5001'
};

@Injectable({
  providedIn: ServicesModule
})
export class SingerService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string ) { }

  getEnterSinger(args: SingerParams = defaultParams): Observable<Singer[]> {
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get(this.uri + 'artist/list', {params})
    .pipe(map((res: { artists: Singer[] }) => {
      return res.artists;
    }));
  }

}
