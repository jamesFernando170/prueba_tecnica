import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
[x: string]: any;
  title = 'prueba_tecnica';
  name: string="";
  last_name: string="";
  email: string="";
  
  data = []

  constructor(private router: Router) { }

  ngOnInit(): void {}

  savePersonData(){
    localStorage.setItem('nombre', this.name);
    localStorage.setItem('email', this.last_name);
    localStorage.setItem('telefono', this.email);
  }

  clean(){
    this.name = ""
    this.last_name = ""
    this.email = ""
  }

  saveLocalStorage(){
    this.router.navigate(['other-view']);
  }
}
