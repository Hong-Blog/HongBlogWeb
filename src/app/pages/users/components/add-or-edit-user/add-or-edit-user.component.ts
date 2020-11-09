import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HongValidators} from '../../../../common/hong-validators';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {UserService} from '../../../../services/user.service';
import {catchError} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd/message';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-add-or-edit-user',
  templateUrl: './add-or-edit-user.component.html',
  styleUrls: ['./add-or-edit-user.component.less']
})
export class AddOrEditUserComponent implements OnInit {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modal: NzModalRef,
    private userService: UserService,
    private message: NzMessageService) {
    const {required, maxLength, minLength, email, mobile} = HongValidators;
    this.validateForm = this.fb.group({
      userName: ['', [required, maxLength(12), minLength(6)]],
      password: ['', [required, minLength(6), maxLength(12)]],
      nickName: ['', [required, maxLength(12)]],
      mobile: ['', [mobile]],
      email: ['', [email]],
      qq: ['']
    });
  }

  ngOnInit(): void {
  }

  destroyModal(): void {
    this.modal.destroy();
  }

  onConfirm(): void {
    console.log(this.validateForm.valid);
    if (this.validateForm.valid) {
      this.userService.addUser(this.validateForm.value)
        .pipe(catchError((err: HttpErrorResponse) => {
          this.message.error(err.error.error);
          return throwError(err.error.error);
        }))
        .subscribe(res => {
          this.modal.destroy();
        });
    }
  }
}
