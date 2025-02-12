import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name: string= 'Radhe'
  course="MCA"
  Roll:number=12
  isStudent:boolean= true
  class = "primary"
  inputType = "text"
  value = "Enter Text"
  state: string="Bihar"

    constructor(){
      setTimeout(()=>{
          this.name = "Hello Radhe"
      },3000)
    }

    hit(message:string){
      alert(message)
    }
    changeCourse(){
      this.course = "Angular 18"
    }
}
