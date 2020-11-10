import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {AddOrEditUserComponent} from './components/add-or-edit-user/add-or-edit-user.component';

export interface UserInfo {
  id: number;
  username: string;
  password: string;
  nickname: string;
  mobile: string;
  email: string;
  qq: string;
  birthday?: any;
  gender?: any;
  avatar: string;
  user_type: string;
  company?: any;
  blog?: any;
  location?: any;
  source?: any;
  uuid?: any;
  privacy?: number;
  notification?: number;
  score: number;
  experience: number;
  reg_ip: string;
  last_login_ip: string;
  last_login_time?: Date;
  login_count: number;
  remark?: any;
  status: number;
  create_time: Date;
  update_time: Date;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  validateForm: FormGroup;

  listOfUser: UserInfo[];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private modelService: NzModalService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    this.validateForm.addControl('keyword', new FormControl());
    this.search();
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  search(): void {
    const keyword = this.validateForm.value.keyword || '';
    this.userService.getUsers(keyword)
      .subscribe((res: any) => {
        this.listOfUser = res.data;
      });
  }

  addUser(): void {
    this.modelService.create({
      nzTitle: '添加用户',
      nzContent: AddOrEditUserComponent
    });
  }

  deleteUser(user: UserInfo): void {
    this.modelService.confirm({
      nzTitle: `确定要删除${user.username}吗？`,
      nzIconType: 'exclamation-circle',
      nzOnOk: () => {
        this.userService.deleteUser(user.id)
          .subscribe(res => this.search());
      }
    });
  }
}
