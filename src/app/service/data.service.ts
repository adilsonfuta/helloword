import { Injectable } from '@angular/core';
import {User} from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  users:User[];
  data:Observable<any>;

  constructor() { 
      
    this.users = [
      {
        firstname: 'Adilson',
        lastname: 'Futa',
        email: 'adilson@gmail.com',
        isActive: true,
        registered: new Date('01/02/2020 08:30:00'),
        hide: true
      },

      {
        firstname: 'Irene',
        lastname: 'Futa',
        email: 'irene@gmail.com',
        isActive: false,
        registered: new Date('03/10/2020 18:20:00'),
        hide: true
      },

      {
        firstname: 'Luzilda',
        lastname: 'Futa',
        email: 'luzilda@gmail.com',
        isActive: true,
        registered: new Date('11/08/2020 10:30:00'),
        hide: true
      }
    ];

  }

  addUser(user:User){
    this.users.unshift(user);
  }

  getUsers():User[] {
    console.log('Fecthing user from service json');
    return this.users;
  }

  testandoGetData(){
        this.data=new Observable(observer=>{
      setTimeout(()=>{
        observer.next(1);
      },1000);

      setTimeout(()=>{
        observer.next(2);
      },2000);

      setTimeout(()=>{
        observer.next(3); 
      },3000);

      setTimeout(()=>{
        observer.next(4);
      },4000);
    
    });
    
    return this.data; 
  }

}
