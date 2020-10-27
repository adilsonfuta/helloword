import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

   // isActive:true,
    // registered: new Date('01/02/2020 08:30:00'),
    // hide:true

  user:User={
    firstname: '',
    lastname: '',
    age: null,
    address: {
        street: '',
        city: '',
        state: ''
    }
  };
  users: User[];
  showExtended: boolean=true;  
  loaded: boolean= false; 
  enableAdd:boolean=false;
  showUserForm:boolean=false;


//  o construtor usar 
//  para  injecao depencia
  constructor() {
    
   }

  // permite ver o lifecicle do 
  //components podes usar ele para req ajax
 
  ngOnInit() { 
    this.users=[
      {
        firstname: 'Adilson',
    lastname: 'Futa',
    age: 78,
    address: {
        street: ' Km 14 A',
        city: 'Viana',
        state: 'Distrito de Urbano de Luanda'
    }, 
    isActive:true,
    registered: new Date('01/02/2020 08:30:00'),
    hide:true
    },

    {
      firstname: 'Irene',
  lastname: 'Futa',
  age: 25,
  address: {
      street: ' Km 14 A',
      city: 'Viana',
      state: 'Distrito de Urbano de Luanda'
  }, 
  isActive:false,
  registered: new Date('03/10/2020 18:20:00'),
  hide:true
  },

  {
    firstname: 'Luzilda',
lastname: 'Futa',
age: 19,
address: {
    street: ' Km 14 A',
    city: 'Viana',
    state: 'Distrito de Urbano de Luanda'
}, 
isActive:true,
registered: new Date('11/08/2020 10:30:00'),
hide:true
}
]; 


this.loaded=true;
//this.showExtended=false;

/*

this.addUser( 
{
    firstname: 'Afonso',
    lastname: 'Futa'
});
*/


}


  // addUser( user: User){
  //   this.users.push(user);
  // }


  addUser( ){
    this.user.isActive=true;
    this.user.registered=new Date();
        this.users.unshift(this.user);

    this.user={
      firstname: '',
      lastname: '',
      age: null,
      address: {
          street: '',
          city: '',
          state: ''
      }
    };
  }

  toggleHide(u: User){    
    u.hide=!u.hide;
  }

  onSubmit(e){

    console.log("1212")
    e.preventDefault();

  }

  fireEvent(e){

    console.log(e.type);
    console.log(e.target.value);
 

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