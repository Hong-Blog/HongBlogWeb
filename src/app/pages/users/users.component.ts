import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

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

  constructor(private fb: FormBuilder, private userService: UserService) {
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
    alert('添加用户');
  }
}
