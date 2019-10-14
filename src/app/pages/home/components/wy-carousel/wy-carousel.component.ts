import { Component, OnInit, TemplateRef, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
// import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  // 默认是一个组件发生改变，会把相关联的父组件或子组件重新变更检测一遍，发现是否有变化
  // 修正变更检测策略，OnPush策略只会在INput()输入属性 发生变化后，组件才会进行变更检测
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {
  @Input() activeIndex = 0; // 输入属性、在传递到home.component.html中

  // 指定了 参数只能是 <'pre' | 'next'>，而不是string ，这样可以减少出错率
  @Output() changeSlide = new EventEmitter<'pre' | 'next'>();
  // 定义变量
  @ViewChild('dot', {static: true}) dotRef: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

  // wy-carousel.component.html页面向前 向后，点击之后，
  // wy-carousel.component.ts需要向homeComponent发送点击的类型(pre/next)，才能控制轮播图
  // 同时在home.component.html中监听该事件(changeSlide)
  onChangeSlide(type: 'pre' | 'next') {
    this.changeSlide.emit(type);
  }
}
