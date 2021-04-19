import { Component, OnInit } from '@angular/core';

//services
import { ServiceCourseService } from "../../../_services/service-course.service";
import { environment } from '../../../../environments/environment';
import { AppConfirmService } from '../../../shared/services/app-confirm/app-confirm.service';
import { AppLoaderService } from '../../../shared/services/app-loader/app-loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {
  lstCourse: any[] = [];
  constructor(private svcCourse: ServiceCourseService,  private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.CallGetAll();
  }

  //***************** GET VIEWS **********************/
//*************************************************/
/*** CallGetAll*/
public CallGetAll() {
  this.svcCourse.GetAll().subscribe(response => {
    if (environment.isDebug)  console.log('CallGetAll: response', response);
    this.lstCourse = response;  
  }, 
  error => {
    if(environment.isDebug) console.log("CallGetAll: Error ", error); 
  });
}

DeleteCourse(item : any){ 
  console.log('DeleteCourse', item.id);
  this.svcCourse.Delete(item.id).subscribe(response => {  
    this.CallGetAll();
    this.snack.open('Course deleted¡¡¡', 'OK', { duration: 6000 });
  }, 
  error => {
    console.log("Delete course: Error: ", error);          
  });  
}

}
