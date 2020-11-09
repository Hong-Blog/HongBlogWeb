import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from './users-routing.module';
import {NzTableModule} from 'ng-zorro-antd/table';
import {CommonModule} from '@angular/common';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import {NzInputModule} from 'ng-zorro-antd/input';
import {IconsProviderModule} from '../../icons-provider.module';
import {AddOrEditUserComponent} from './components/add-or-edit-user/add-or-edit-user.component';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzMessageModule} from 'ng-zorro-antd/message';

@NgModule({
  imports: [
    UsersRoutingModule,
    NzTableModule,
    CommonModule,
    NzDividerModule,
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    IconsProviderModule,
    NzModalModule,
    NzMessageModule,
  ],
  declarations: [UsersComponent, AddOrEditUserComponent],
  exports: [UsersComponent]
})
export class UsersModule {
}
