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
  enableAdd:boolean=true;
  currentClasses={};
  currentStyles={};


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
    image:'http://lorempixel.com/600/600/people/3',
    isActive:true,
    balance:100,
    registered: new Date('01/02/2020 08:30:00')
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
  image:'http://lorempixel.com/600/600/people/2',
  isActive:false,
  balance:200,
  registered: new Date('03/10/2020 18:20:00')
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
image:'http://lorempixel.com/600/600/people/1',
isActive:true,
balance:50,
registered: new Date('11/08/2020 10:30:00')
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

this.setCurrentClasses();
this.setCurrentStyles();

}


  addUser( user: User){
    this.users.push(user);
  }

  setCurrentClasses(){
    this.currentClasses={
      'btn-success':this.enableAdd,
      'big-text':this.showExtended
    }
  }

  setCurrentStyles(){
    this.currentStyles ={ 
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size':this.showExtended ? '': '2rem'
    }
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