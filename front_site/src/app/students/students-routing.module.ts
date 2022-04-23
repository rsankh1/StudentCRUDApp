import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { VimeoListComponent } from './vimeo-list/vimeo-list.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'student/stulogin',
    pathMatch: 'full',
  },
  {
    path: 'student/stulogin',
    component: LoginComponent,
  },
  {
    path: 'student/index',
    component: IndexComponent,
  },
  {
    path: 'student/:postId/view',
    component: ViewComponent,
  },
  {
    path: 'student/create',
    component: CreateComponent,
  },
  {
    path: 'student/:postId/edit',
    component: EditComponent,
  },

  {
    path: 'student/sturegister',
    component: RegisterComponent,
  },
  {
    path: 'student/vimeo',
    component: VimeoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
