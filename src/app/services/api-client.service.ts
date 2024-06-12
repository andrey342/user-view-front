import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserReadDto } from '../models/dto/UserReadDto';
import { UserCreateDto } from '../models/dto/UserCreateDto';
import { UserUpdateDto } from '../models/dto/UserUpdateDto';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private apiUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserReadDto[]> {
    return this.http.get<UserReadDto[]>(this.apiUrl);
  }

  getUser(id: number): Observable<UserReadDto> {
    return this.http.get<UserReadDto>(`${this.apiUrl}/${id}`);
  }

  createUser(user: UserCreateDto): Observable<UserReadDto> {
    return this.http.post<UserReadDto>(this.apiUrl, user);
  }

  updateUser(id: number, user: UserUpdateDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
