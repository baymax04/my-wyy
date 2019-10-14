import { Observable, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { SingerService } from 'src/app/services/singer.service';
import { Singer, Banner, HotTag, SongSheet} from 'src/app/services/data-types/common.types';
import { first } from 'rxjs/internal/operators';

// 类型定义
type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]];

@Injectable()
export class HomeResolverService implements Resolve<HomeDataType> {
  constructor(
    private homeServe: HomeService,
    private singerServe: SingerService
  ) {}

  resolve(): Observable<HomeDataType> {
    // 获取每一个流后，把最新值发射出去
    // first() 只取第一个
    return forkJoin([
            this.homeServe.getBanners(),
            this.homeServe.getHotTags(),
            this.homeServe.getPersonalSheetList(),
            this.singerServe.getEnterSinger()
        ]).pipe(first());
  }
}
