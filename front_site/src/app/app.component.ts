import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front_side';

  constructor(private http: HttpClient) {}

  //For Testing
  // onSubmit() {
  //   this.http.get('http://localhost:8000/api').subscribe((data) => {
  //     console.log(data);
  //   });
  // }
  //For Testing
}
