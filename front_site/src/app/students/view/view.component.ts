import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/student';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  id: number;
  students: Student;
  stuid: any;
  stuname: any;
  stuemail: any;
  stucollege: any;
  stuaddress: any;
  stumobile: any;
  stucourse: any;
  check: boolean;

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
    console.log(this.id);

    this.studentService.find(this.id).subscribe((data: Student) => {
      this.students = data;
      console.log(this.students);

      this.stuid = Object.values(this.students)[0].id;
      this.stuname = Object.values(this.students)[0].name;
      this.stuemail = Object.values(this.students)[0].email;
      this.stumobile = Object.values(this.students)[0].mobile;
      this.stucollege = Object.values(this.students)[0].college;
      this.stucourse = Object.values(this.students)[0].course;
      this.stuaddress = Object.values(this.students)[0].address;
    });
  }
}
