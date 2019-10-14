import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from './services.module';
import { Observable } from 'rxjs';
import { Banner, HotTag, SongSheet } from './data-types/common.types';
import { map } from 'rxjs/internal/operators';


@Injectable({
  providedIn: ServicesModule  // HomeService 是哪个模块提供的.
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string ) { }

   /**
    * 这些接口会在home.component.ts中使用
    */

  // 获取轮播图
  getBanners(): Observable<Banner[]> {
    return this.http.get(this.uri + 'banner')
    .pipe(map((res: { banners: Banner[] }) => {
      return res.banners;
    }));
  }

  // 获取热门标签接口 ，需要先定义热门歌单的数据类型，
  // path:src\app\services\data-types\common.types.ts
  getHotTags(): Observable<HotTag[]> {
    return this.http.get(this.uri + 'playlist/hot')
    .pipe(map((res: {tags: HotTag[]}) => {
      // 先根据position排序，在截取前5个
      return res.tags.sort((x: HotTag, y: HotTag) => {
        return x.position - y.position;
      }).slice(0, 5);
    }));
  }
  // 获取热门歌单===>同 获取热门标签
  getPersonalSheetList(): Observable<SongSheet[]> {
    return this.http.get(this.uri + 'personalized')
    .pipe(map((res: {result: SongSheet[]}) => {
      return res.result.slice(0, 16);  // res.result.slice(0, 16); 截取歌单的前16个
    }));
  }

}
