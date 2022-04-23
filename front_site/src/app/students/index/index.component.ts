import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '../../student';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  students: Student[] = [];
  check: boolean;

  constructor(public studentService: StudentsService, public router: Router) {}

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

    this.studentService.getAll().subscribe((data: Student[]) => {
      this.students = data;
      console.log(this.students);
    });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/student/stulogin');
  }

  deleteStudent(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.delete(id).subscribe((res: any) => {
          if (res.result == 1) {
            this.students = this.students.filter((item) => item.id !== id);
            console.log('Student deleted succcessfully');
          }
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }
}
