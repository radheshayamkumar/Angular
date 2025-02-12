import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
    isDiv1Visible:boolean=true
    isDiv2Visible:boolean=true
    num1:string=""
    num2=""
    isActive:boolean=true

    cityArray:string [] = ["pune", "patna", "Mumbai", "Chennai"]

    studentList: any[] =[
      {studentId :1 , name:"AA", city : "Pune", isActive:false},
      {studentId :2 , name:"BB", city : "Patna", isActive:false},
      {studentId :3 , name:"CC", city : "Bengluru", isActive:true},
      {studentId :4 , name:"DD", city : "Hyderabad", isActive:false},
      {studentId :5 , name:"EE", city : "Bhopal", isActive:true}
    ]

    showDiv1(){
      this.isDiv1Visible=true
    }

    hideDiv1(){
      this.isDiv1Visible=false
    }

    toggle(){
      this.isDiv2Visible = !this.isDiv2Visible
    }
}
