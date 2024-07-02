import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-view',
  standalone: true,
  imports: [],
  templateUrl: './other-view.component.html',
  styleUrl: './other-view.component.css'
})
export class OtherViewComponent implements OnInit{
  name: string="";
  last_name: string="";
  email: string="";

  constructor() {}

  ngOnInit(): void {
    this.getLocalStorage()
  }

  getLocalStorage(){
    this.name = JSON.stringify(localStorage.getItem('nombre'))
    this.last_name = JSON.stringify(localStorage.getItem('email'))
    this.email = JSON.stringify(localStorage.getItem('telefono'))
  }
  
}
