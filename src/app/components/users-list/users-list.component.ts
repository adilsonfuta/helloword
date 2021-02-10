import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/model/User';
import {UserService} from '../../service/user.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  // isActive:true,
  // registered: new Date('01/02/2020 08:30:00'),
  // hide:true

  user: User = {
    firstname: '',
    lastname: '',
    email: ''
  };

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  data:any;


  //  o construtor usar 
  //  para  injecao depencia

  constructor(private userService:UserService) {     }

  // permite ver o lifecicle do 
  //components podes usar ele para req ajax

  ngOnInit() {

    this.userService.getUsers().subscribe(users=>{
        this.users=users;
          this.loaded = true;
    });

  
    //this.showExtended=false;
  
    // this.dataService.testandoGetData().subscribe(data=>
    //   {
    //   console.log(data)
    // });

  }

  toggleHide(u: User) {
    u.hide = !u.hide;
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('form invalido');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
     
      this.userService.addUser(value)
      this.form.reset();
    }
  }



}


/*

  FUNCOES EXTRAS 
  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstname: '',
      lastname: '',
      email: ''
    };
  }


  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
this.addUser(
{
    firstname: 'Afonso',
    lastname: 'Futa'
});

addUser( user: User){
    this.users.push(user);
  }
*/

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