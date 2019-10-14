import { Banner, HotTag, SongSheet, Singer } from './../../services/data-types/common.types';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  carouselActiveIndex = 0;
  // 创建变量,保存数据
  banners: Banner[];
  hotTags: HotTag[];
  songSheetList: SongSheet[];
  singers: Singer[];

  // 需要拿到轮播组件的实例
  @ViewChild(NzCarouselComponent, {static: true}) private nzCarousel: NzCarouselComponent;

  // 注入服务
  // 先准备数据，在进行导航，这样就会避免数据无法即时显示的问题。
  constructor(
    private route: ActivatedRoute,
    private sheetServe: SheetService
    ) {
      this.route.data.pipe(map(res => res.homeDatas)).subscribe( ( [banners, hotTags, songSheetList, singers]) => {
      this.banners = banners;
      this.hotTags = hotTags;
      this.songSheetList = songSheetList;
      this.singers = singers;
      });
  }

  ngOnInit() {
  }
  // 每次切换轮播图都会改变carouselActiveIndex的值
  onBeforeChange({to}) {
    this.carouselActiveIndex = to;
  }
  // 需要拿到轮播组件的实例,这样就可以调用那两个方法 onChangeSlide
  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }

  // 播放歌单
  onPlaySheet(id: number) {
    this.sheetServe.palySheet(id).subscribe(res => {
    console.log('res: ', res);
    });
  }
}
