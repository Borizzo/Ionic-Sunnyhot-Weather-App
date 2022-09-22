import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DayPipe } from '../pipes/day.pipe';
import { DateFormattingPipe } from '../pipes/date-formatting.pipe';
import { from } from 'rxjs';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,DayPipe, DateFormattingPipe,],
  exports: [DateFormattingPipe,DayPipe,]
})
export class HomePageModule {}
