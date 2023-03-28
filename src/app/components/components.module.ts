import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
