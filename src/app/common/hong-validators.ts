import {NzSafeAny} from 'ng-zorro-antd/core/types';
import {AbstractControl, ValidatorFn, Validators} from '@angular/forms';

export type HongErrorsOptions = { 'zh-cn': string; en: string } & Record<string, NzSafeAny>;
export type HongValidationErrors = Record<string, HongErrorsOptions>;

export class HongValidators extends Validators {
  static minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): HongValidationErrors | null => {
      if (Validators.minLength(minLength)(control) === null) {
        return null;
      }
      return {minlength: {'zh-cn': `最小长度为 ${minLength}`, en: `MinLength is ${minLength}`}};
    };
  }

  static maxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): HongValidationErrors | null => {
      if (Validators.maxLength(maxLength)(control) === null) {
        return null;
      }
      return {maxlength: {'zh-cn': `最大长度为 ${maxLength}`, en: `MaxLength is ${maxLength}`}};
    };
  }

  static mobile(control: AbstractControl): HongValidationErrors | null {
    const value = control.value;

    if (isEmptyInputValue(value)) {
      return null;
    }

    return isMobile(value) ? null : {mobile: {'zh-cn': `手机号码格式不正确`, en: `Mobile phone number is not valid`}};
  }

  static required(control: AbstractControl): HongValidationErrors | null {
    if (Validators.required(control) == null) {
      return null;
    }
    return {required: {'zh-cn': `必填项`, en: `Input is required`}};
  }

  static email(control: AbstractControl): HongValidationErrors | null {
    const value = control.value;
    if (isEmptyInputValue(value)) {
      return null;
    }
    if (Validators.email(control) == null) {
      return null;
    }
    return {email: {'zh-cn': `邮箱格式不正确`, en: `The input is not valid email`}};
  }
}

function isEmptyInputValue(value: NzSafeAny): boolean {
  return value == null || value.length === 0;
}

function isMobile(value: string): boolean {
  return typeof value === 'string' && /(^1\d{10}$)/.test(value);
}
