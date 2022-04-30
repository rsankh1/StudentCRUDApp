import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  check: boolean;

  constructor(public studentService: StudentsService, private router: Router) {}

  ngOnInit(): void {
    //new code start
    this.check = this.studentService.loggedIn();
    console.log(this.check);
    if (this.check === false) {
      Swal.fire('Message!', 'Kindly login first!', 'error');
      this.router.navigateByUrl('student/stulogin');
      return;
    }
    //new code end

    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      address: new FormControl('', [Validators.required]),
      college: new FormControl('', [Validators.required]),
      course_name: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.studentService.create(this.form.value).subscribe((res: any) => {
      console.log('Message is ' + JSON.stringify(res));
      if (res.result == 'success') {
        console.log('Student info created successfully');
        this.router.navigateByUrl('student/index');
      }
    });
  }
}
