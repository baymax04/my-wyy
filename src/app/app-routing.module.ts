import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 添加空路由,路径为空时,定位到home,路径全匹配
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
