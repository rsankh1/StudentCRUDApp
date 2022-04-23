import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VimeoListComponent } from './vimeo-list/vimeo-list.component';

@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent, LoginComponent, RegisterComponent, VimeoListComponent],
  imports: [
    FormsModule,
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class StudentsModule {}
