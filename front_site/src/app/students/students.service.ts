import { Injectable } from '@angular/core';
import { Student } from '../student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private apiUrl = 'http://localhost:8000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient
      .post<{ token: string }>(this.apiUrl + '/logins', {
        email,
        password,
      })
      .pipe(
        tap((res) => {
          //localStorage.setItem('access_token', res.access_token);
          localStorage.setItem('access_token', res.token);
        })
      );
  }

  register(name: string, email: string, password: string) {
    return (
      this.httpClient
        // .post<{ access_token: string }>(this.apiUrl + '/register', {
        .post(this.apiUrl + '/register', {
          name,
          email,
          password,
        })
        .pipe(
          tap((res) => {
            this.login(email, password);
          })
        )
    );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  loggedIn(): any {
    return localStorage.getItem('access_token') !== null;
  }

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.apiUrl + '/students/');
  }

  create(student: any): Observable<Student> {
    return this.httpClient
      .post<Student>(
        this.apiUrl + '/students/',
        JSON.stringify(student),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  find(id: any): Observable<Student> {
    return this.httpClient
      .get<Student>(this.apiUrl + '/students/' + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id: any, student: any): Observable<Student> {
    return this.httpClient
      .put<Student>(
        this.apiUrl + '/students/' + id,
        JSON.stringify(student),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(id: any) {
    return this.httpClient
      .delete<Student>(this.apiUrl + '/students/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
