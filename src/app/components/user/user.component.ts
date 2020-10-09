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
        age: 28,
        address: {
            street: 'Viana Km 14 A',
            city: 'Luanda',
            state: 'Distrito de Urbano de Luanda'
        }
        }
    }

    showAge(){
                return this.user.age;
    }

}



