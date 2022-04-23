import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/student';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  students: Student;
  form: FormGroup;
  constructor(
    public studentService: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    console.log(this.form.controls['name'].value);
    console.log(this.form.controls['email'].value);
    console.log(this.form.controls['password'].value);

    this.studentService
      .register(
        this.form.controls['name'].value,
        this.form.controls['email'].value,
        this.form.controls['password'].value
      )
      .subscribe(
        (res: any) => {
          console.log('jlkjjlkjkljljkl' + res);
          if (res.success == true) {
            this.router.navigateByUrl('/student/stulogin');
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong or email has registered already!',
            });
          }
        },
        (err) => {
          console.log('jlkjljlk' + JSON.stringify(err.error.success));
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong !',
          });
        }
      );
  }
}
