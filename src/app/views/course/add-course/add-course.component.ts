import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ServiceCourseService } from "../../../_services/service-course.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  public solicitud: FormGroup; 
  txtNameCourse: FormControl = new FormControl();  
  constructor(private svcCourse: ServiceCourseService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.RegisterControls();
  }

  private RegisterControls(){

    this.solicitud =  new FormGroup({
      txtNameCourse: this.txtNameCourse     
     });   
  }
  
  AddCourse(){
    let item = {
      course : this.txtNameCourse.value
    }
    console.log('AddCourse', item);
    this.svcCourse.Add(item).subscribe(response => {  
      this.snack.open('Course registered¡¡¡', 'OK', { duration: 6000 });
    }, 
    error => {
      console.log("Add course: Error: ", error);          
    });  
  }
  
}
