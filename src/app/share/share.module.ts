import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { WyUiModule } from './wy-ui/wy-ui.module';



@NgModule({
  declarations: [],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    CommonModule,
    WyUiModule
  ],
  // 共享模块、所依赖的模块 需要导出 方便其他模块使用，
  exports: [
    NgZorroAntdModule,
    FormsModule,
    CommonModule,
    WyUiModule
  ]
})
export class ShareModule { }
