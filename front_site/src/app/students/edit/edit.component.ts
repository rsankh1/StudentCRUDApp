import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/student';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id: number;
  check: boolean;
  students: Student;
  form: FormGroup;

  constructor(
    public studentService: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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

    this.id = this.route.snapshot.params['postId'];
    this.studentService.find(this.id).subscribe((data: Student) => {
      this.students = data;
      // console.log('kjhjkhjkhkjhjkhjkhjkhjkhj' + JSON.stringify(this.students));
      // console.log('kjhjkhjkhkjhjkhjkhjkhjkhj' + typeof this.students);

      console.log(typeof Object.values(this.students)[0].name);
      console.log(Object.values(this.students)[0].email);
      console.log(Object.values(this.students)[0].mobile);
      console.log(Object.values(this.students)[0].address);
      console.log(Object.values(this.students)[0].college);
      console.log(Object.values(this.students)[0].course);

      this.form.patchValue({
        name: Object.values(this.students)[0].name,
        email: Object.values(this.students)[0].email,
        mobile: Object.values(this.students)[0].mobile,
        address: Object.values(this.students)[0].address,
        college: Object.values(this.students)[0].college,
        course_name: Object.values(this.students)[0].course,
      });
    });

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
    this.studentService
      .update(this.id, this.form.value)
      .subscribe((res: any) => {
        if (res.result == 'success') {
          Swal.fire('Good job!', 'Record update successfully!', 'success');
          console.log('Record Updated Successfully');
          this.router.navigateByUrl('/student/index');
        }
      });
  }
}
