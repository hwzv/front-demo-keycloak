import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HomeComponent } from './home/home.component';

//controls material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,   
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatListModule,
    MatListModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatInputModule,
    MatStepperModule,
    MatDividerModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    CommonModule,
    NgxDatatableModule,
    MatExpansionModule, 
    MatSelectModule, 
    MatChipsModule, 
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
