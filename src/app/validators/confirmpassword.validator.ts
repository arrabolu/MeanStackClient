import { FormGroup } from '@angular/forms';
export const confirmPasswordVal = (password : string , confirmPassword : string) => {
  return (formGroup : FormGroup) => {
    const passwordControl = formGroup.controls[password];
    const confirmPasswordControl = formGroup.controls[confirmPassword];

    if(confirmPasswordControl.errors && !confirmPasswordControl.errors['confirmPasswordVal']) {
      return ;
  }

  if(passwordControl.value !== confirmPasswordControl.value) {
    confirmPasswordControl.setErrors({'confirmPasswordVal' : true});
  }else {
    confirmPasswordControl.setErrors(null);
  }

}
}
