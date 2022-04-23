import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  students: Student;
  form: FormGroup;
  constructor(
    public studentService: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    console.log(this.form.controls['email'].value);
    console.log(this.form.controls['password'].value);

    this.studentService
      .login(
        this.form.controls['email'].value,
        this.form.controls['password'].value
      )
      .subscribe(
        (res: any) => {
          console.log('jlkjjlkjkljljkl' + JSON.stringify(res));
          if (res.success == true) {
            this.router.navigateByUrl('/student/index');
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Login info is not matching!',
            });
          }
        },
        (err) => {
          console.log('jlkjljlk' + JSON.stringify(err.error.success));
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Login info is not matching!',
          });
        }
      );
  }
}
