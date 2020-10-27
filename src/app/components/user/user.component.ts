import { Component , OnInit } from "@angular/core";
//adicionado a nossa interface no projecto original 
import { User } from "../../model/User";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponet implements OnInit {

    user: User;

    constructor() {
      
    }

    ngOnInit(){
        this.user= {
            firstname: 'Adilson',
        lastname: 'Futa',
       email:'geral@nova.com'
        }
    }

    showAge(){
                return this.user.email;
    }

}



