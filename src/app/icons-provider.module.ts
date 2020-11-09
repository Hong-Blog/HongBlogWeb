import {NgModule} from '@angular/core';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';

import {
  DashboardOutline,
  DeleteOutline,
  FormOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  PlusOutline,
  SearchOutline,
  UsergroupAddOutline,
  UserOutline,
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, UserOutline,
  SearchOutline, PlusOutline, DeleteOutline, UsergroupAddOutline
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    {provide: NZ_ICONS, useValue: icons}
  ]
})
export class IconsProviderModule {
}
