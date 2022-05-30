import { Injectable } from '@angular/core';
import {Animal} from '../model/animal';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
const API_URL=`${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  //Kết nối BE
  constructor(private http: HttpClient){}

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(`${API_URL}`);
  }

  create(data): Observable<Animal>{
    return this.http.post(`${API_URL}/create`, data);
  }

  update(id, data): Observable<Animal>{
    return this.http.put<Animal>(`${API_URL}/animal/${id}`, data)
  }

  findById(id): Observable<Animal>{
    return this.http.get<Animal>(`${API_URL}/animal/${id}`);
  }

  delete(id): Observable<Animal>{
    return this.http.delete<Animal>(`${API_URL}/animal/${id}`)
  }















  // animals: Animal[] = [
  //   {
  //     id: 1,
  //     name: 'lucky',
  //     color: 'black',
  //     price: 100,
  //   },
  //   {
  //     id: 2,
  //     name: 'mun',
  //     color: 'white',
  //     price: 120,
  //   },
  //   {
  //     id: 3,
  //     name: 'ben',
  //     color: 'yellow',
  //     price: 150,
  //   },
  // ];
  // constructor() { }
  //
  // getAll(): Animal[] {
  //   return this.animals;
  // }
  //
  // findById(id): Animal {
  //   this.animals.map(animal => {
  //     if (animal.id === id) {
  //       return animal;
  //     }
  //   });
  //   return null;
  // }
  //
  // create(animal): Animal {
  //   this.animals.push(animal);
  //   return animal;
  // }
  //
  // updateById(id, animal) {
  //   for (let i = 0; i < this.animals.length; i++) {
  //     // tslint:disable-next-line:triple-equals
  //     if (this.animals[i].id == id) {
  //       this.animals[i] = animal;
  //     }
  //   }
  // }
  //
  // delete(id) {
  //   let index = -1;
  //   for (let i = 0; i < this.animals.length; i++) {
  //     if (this.animals[i].id == id) {
  //       index = i;
  //     }
  //   }
  //   this.animals.splice(index, 1);
  // }
}
