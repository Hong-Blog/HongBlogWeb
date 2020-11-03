import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from './users-routing.module';
import {NzTableModule} from 'ng-zorro-antd/table';
import {CommonModule} from '@angular/common';
import {NzDividerModule} from 'ng-zorro-antd/divider';

@NgModule({
  imports: [
    UsersRoutingModule,
    NzTableModule,
    CommonModule,
    NzDividerModule
  ],
  declarations: [UsersComponent],
  exports: [UsersComponent]
})
export class UsersModule {
}
