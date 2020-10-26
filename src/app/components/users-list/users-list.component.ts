import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];
  showExtended: boolean=true;  
  loaded: boolean= false; 

  constructor() { }

  // permite ver o lifecicle do components podes usar ele para req ajax
  // o construtor usar para  injecao depencia
  ngOnInit() {
     


this.users=[
      {
        firstname: 'Adilson',
    lastname: 'Futa',
    age: 28,
    address: {
        street: ' Km 14 A',
        city: 'Viana',
        state: 'Distrito de Urbano de Luanda'
    }
    },

    {
      firstname: 'Irene',
  lastname: 'Futa',
  age: 25,
  address: {
      street: ' Km 14 A',
      city: 'Viana',
      state: 'Distrito de Urbano de Luanda'
  }
  },

  {
    firstname: 'Miguel',
lastname: 'Futa',
age: 19,
address: {
    street: ' Km 14 A',
    city: 'Viana',
    state: 'Distrito de Urbano de Luanda'
}
}
]; 


this.loaded=true;
//this.showExtended=false;

this.addUser( 
  {
    firstname: 'Afonso',
    lastname: 'Futa'
   });


}


  addUser( user: User){
    this.users.push(user);
  }






 
 
}


/*    setTimeout(()=>{  
    codigo carregadni fica aqui   
   
},2000);
*/


 /*this.addUser( {
      firstname: 'Afonso',
  lastname: 'Futa',
  age: 13,
  address: {
      street: ' Km 14 A',
      city: 'Viana',
      state: 'Distrito de Urbano de Luanda'
  }
  })*/